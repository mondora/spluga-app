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

export function addInvitation(email, ownerId, companyId) {
    return async dispatch => {
        dispatch({
            type: ADD_INVITATION_START
        });

        try {
            const collection = mongodb.db(MONGO_DB_NAME).collection("invitations");
            const objectId = await collection.insertOne({
                ownerId,
                email,
                companyId,
                accepted: false,
                createAt: new Date()
            });
            console.log(objectId.insertedId.toHexString());

            //TODO: send email with id
            dispatch({
                type: ADD_INVITATION_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ADD_INVITATION_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}

export const GET_PENDING_INVITATION_START = "GET_PENDING_INVITATION_START";
export const GET_PENDING_INVITATION_SUCCESS = "GET_PENDING_INVITATION_SUCCESS";
export const GET_PENDING_INVITATION_ERROR = "GET_PENDING_INVITATION_ERROR";

export function getPendingInvitation(id) {
    return async dispatch => {
        dispatch({
            type: GET_PENDING_INVITATION_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("invitations");

        try {
            const query = { _id: new BSON.ObjectId(id), accepted: false };
            const result = await collection.find(query).first();
            dispatch({
                type: GET_PENDING_INVITATION_SUCCESS,
                payload: { result }
            });
        } catch (error) {
            dispatch({
                type: GET_PENDING_INVITATION_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}

export const ACCEPT_INVITATION_START = "ACCEPT_INVITATION_START";
export const ACCEPT_INVITATION_SUCCESS = "ACCEPT_INVITATION_SUCCESS";
export const ACCEPT_INVITATION_ERROR = "ACCEPT_INVITATION_ERROR";

export function acceptInvitation(invitation) {
    return async dispatch => {
        dispatch({
            type: ACCEPT_INVITATION_START
        });

        const invitations = mongodb.db(MONGO_DB_NAME).collection("invitations");
        //const companies = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            await invitations.updateOne(
                { _id: invitation._id },
                { ...invitation, accepted: true, acceptedAt: new Date() }
            );
            //TODO: update companies
            /*await companies.updateOne(
                { _id: invitation.companyId },
                { ...invitation, accepted: true, acceptedAt: new Date() }
            );*/

            dispatch({
                type: ACCEPT_INVITATION_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ACCEPT_INVITATION_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}
