import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const GET_TARGETS_START = "GET_TARGETS_START";
export const GET_TARGETS_SUCCESS = "GET_TARGETS_SUCCESS";
export const GET_TARGETS_ERROR = "GET_TARGETS_ERROR";

// Get a client for your Stitch app, or instantiate a new one
function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

/*
instantiate a mongoDb service client in mongodb variable for stitch service, 
with object mongodb i can get the collection handle: one instance for get/add/remove
*/

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

//DEFINE ACTION CREATORS
export function getTargets(query) {
    return async dispatch => {
        dispatch({
            type: GET_TARGETS_START
        });
        const collection = mongodb.db(MONGO_DB_NAME).collection("targets");

        try {
            //only ownerId data
            const result = await collection.find(query).toArray();

            dispatch({
                type: GET_TARGETS_SUCCESS,
                payload: { targets: result }
            });
        } catch (error) {
            dispatch({
                type: GET_TARGETS_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const ADD_TARGET_START = "ADD_TARGET_START";
export const ADD_TARGET_SUCCESS = "ADD_TARGET_SUCCESS";
export const ADD_TARGET_ERROR = "ADD_TARGET_ERROR";
export function addTarget(ownerId, data) {
    return async dispatch => {
        dispatch({
            type: ADD_TARGET_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("targets");

        try {
            const result = await collection.insertOne({ ownerId, ...data });

            dispatch({
                type: ADD_TARGET_SUCCESS,
                payload: { target: result }
            });
        } catch (error) {
            dispatch({
                type: ADD_TARGET_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
