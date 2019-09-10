import { Stitch, RemoteMongoClient, BSON } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const ADD_INVITATION_START = "ADD_INVITATION_START";
export const ADD_INVITATION_SUCCESS = "ADD_INVITATION_SUCCESS";
export const ADD_INVITATION_ERROR = "ADD_INVITATION_ERROR";

// Get a client for your Stitch app, or instantiate a new one
function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

/*
instantiate a mongoDb service client in mongodb variable for stitch service, 
with object mongodb i can get the collection handle
(one instance for get/add/remove)
*/

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

const actionError = {
    duplicate: { code: 400, message: "v-team.invitation.error.400.duplicate" },
    invalidLink: { code: 400, message: "v-team.invitation.error.400.invalid" }
};

export function addInvitation(email, companyId) {
    return async dispatch => {
        dispatch({
            type: ADD_INVITATION_START
        });

        try {
            const companies = mongodb.db(MONGO_DB_NAME).collection("companies");
            const company = await companies.findOne({ _id: companyId });
            const team = company.team;

            const alreadyExist = team.filter(x => {
                return x.email === email;
            });

            if (alreadyExist.length > 0) {
                dispatch({
                    type: ADD_INVITATION_ERROR,
                    error: true,
                    errorInfo: actionError.duplicate
                });
                return;
            }

            const tempId = new BSON.ObjectId().toHexString();
            await companies.updateOne(
                { _id: companyId },
                { $push: { team: { tempId, email, status: "invited", createdAt: new Date() } } }
            );

            //TODO: send email with id
            console.log(tempId);

            dispatch({
                type: ADD_INVITATION_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ADD_INVITATION_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const ACCEPT_INVITATION_START = "ACCEPT_INVITATION_START";
export const ACCEPT_INVITATION_SUCCESS = "ACCEPT_INVITATION_SUCCESS";
export const ACCEPT_INVITATION_ERROR = "ACCEPT_INVITATION_ERROR";

export function acceptInvitation(tempId, currentUser) {
    const { profile, id } = currentUser;
    const { picture, name, email } = profile.data;
    return async dispatch => {
        dispatch({
            type: ACCEPT_INVITATION_START
        });

        const companies = mongodb.db(MONGO_DB_NAME).collection("companies");
        const createdAt = new Date();
        try {
            const result = await companies.updateOne(
                { team: { $elemMatch: { tempId: tempId, status: "invited", email } } },
                { $push: { team: { id, role: "O", picture, name, email, status: "active", createdAt } } }
            );

            if (result.modifiedCount !== 1) {
                dispatch({
                    type: ACCEPT_INVITATION_ERROR,
                    error: true,
                    errorInfo: actionError.invalidLink
                });
            } else {
                dispatch({
                    type: ACCEPT_INVITATION_SUCCESS
                });
            }
        } catch (error) {
            dispatch({
                type: ACCEPT_INVITATION_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
