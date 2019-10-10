import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export function getUser(query) {
    return async dispatch => {
        dispatch({
            type: GET_USER_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("users");

        try {
            const result = await collection.findOne(query);

            dispatch({
                type: GET_USER_SUCCESS,
                payload: { result }
            });
        } catch (error) {
            dispatch({
                type: GET_USER_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export function addUser(currentUser) {
    const { id } = currentUser;

    return async dispatch => {
        dispatch({
            type: ADD_USER_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("users");
        const createdAt = new Date();

        const user = { _id: id, createdAt };

        try {
            const objectId = await collection.insertOne(user);

            dispatch({
                type: ADD_USER_SUCCESS,
                payload: { company: objectId }
            });
        } catch (error) {
            dispatch({
                type: ADD_USER_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
