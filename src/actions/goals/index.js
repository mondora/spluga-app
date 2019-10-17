import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

export const GET_GOALS_START = "GET_GOALS_START";
export const GET_GOALS_SUCCESS = "GET_GOALS_SUCCESS";
export const GET_GOALS_ERROR = "GET_GOALS_ERROR";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export function getGoals(query) {
    return async dispatch => {
        dispatch({
            type: GET_GOALS_START
        });
        const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

        try {
            const result = await collection.find(query).toArray();

            dispatch({
                type: GET_GOALS_SUCCESS,
                payload: { goals: result }
            });
        } catch (error) {
            dispatch({
                type: GET_GOALS_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
