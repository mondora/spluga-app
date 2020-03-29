import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";

export function addActivity(activity, currentUser, companyId, impact) {
    return async dispatch => {
        dispatch({
            type: ADD_ACTIVITY_START
        });

        try {
            const userId = currentUser.id;
            activity = { ...activity, companyId, userId };
            let result = [activity];
            await client.callFunction("addActivity", [activity]);

            if (impact) {
                impact.forEach(goal => {
                    const { key, quantity } = goal;
                    const { date, description } = activity;
                    const value = activity.value * quantity;
                    const activityImpact = {
                        description,
                        date,
                        goal: key,
                        companyId,
                        userId,
                        value
                    };
                    result.push(activityImpact);
                    client.callFunction("addActivity", [activityImpact]);
                });
            }
            client.callFunction("upsertCompanyTarget", [result]);

            dispatch({
                type: ADD_ACTIVITY_SUCCESS,
                payload: { result: result }
            });
        } catch (error) {
            dispatch({
                type: ADD_ACTIVITY_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const GET_ACTIVITIES_START = "GET_ACTIVITIES_START";
export const GET_ACTIVITIES_SUCCESS = "GET_ACTIVITIES_SUCCESS";
export const GET_ACTIVITIES_ERROR = "GET_ACTIVITIES_ERROR";

export function getActivities(query) {
    return async dispatch => {
        dispatch({
            type: GET_ACTIVITIES_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("activities");
        try {
            const result = await collection.find(query).toArray();
            dispatch({
                type: GET_ACTIVITIES_SUCCESS,
                payload: { activities: result }
            });
        } catch (error) {
            dispatch({
                type: GET_ACTIVITIES_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
