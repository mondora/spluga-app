import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

export const ADD_INVITATION_START = "ADD_INVITATION_START";
export const ADD_INVITATION_SUCCESS = "ADD_INVITATION_SUCCESS";
export const ADD_INVITATION_ERROR = "ADD_INVITATION_ERROR";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

const actionError = {
    duplicate: { code: 400, message: "v-team.invitation.error.400.duplicate" },
    invalidLink: { code: 400, message: "v-team.invitation.error.400.invalid" }
};

export function addInvitation(email, companyId, subject, message) {
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

            client.callFunction("sendMail", [email, subject, message]);

            await companies.updateOne(
                { _id: companyId },
                { $push: { team: { email, status: "invited", invitedAt: new Date() } } }
            );

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

export function acceptInvitation(currentUser) {
    const { profile, id } = currentUser;
    const { picture, name, email } = profile.data;
    return async dispatch => {
        dispatch({
            type: ACCEPT_INVITATION_START
        });

        const companies = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            const result = await companies.updateOne(
                { team: { $elemMatch: { status: "invited", email: email } } },
                {
                    $set: {
                        "team.$.id": id,
                        "team.$.role": "U",
                        "team.$.picture": picture,
                        "team.$.name": name,
                        "team.$.status": "active",
                        "team.$.activatedAt": new Date()
                    }
                }
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

export const ADD_INVITATION_RESET = "ADD_INVITATION_RESET";

export function addInvitationReset() {
    return dispatch => {
        dispatch({
            type: ADD_INVITATION_RESET
        });
    };
}
