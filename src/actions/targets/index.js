import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export const ADD_TARGET_START = "ADD_TARGET_START";
export const ADD_TARGET_SUCCESS = "ADD_TARGET_SUCCESS";
export const ADD_TARGET_ERROR = "ADD_TARGET_ERROR";
export function addTarget(data, currentUser, companyId) {
    const { id } = currentUser;
    return async dispatch => {
        dispatch({
            type: ADD_TARGET_START
        });

        try {
            const companies = mongodb.db(MONGO_DB_NAME).collection("companies");
            data.startDate = new Date(data.startDate);
            data.endDate = new Date(data.endDate);
            await companies.updateOne(
                { _id: companyId },
                { $push: { targets: { ...data, actual: 0, createdAt: new Date(), createdBy: id } } }
            );

            dispatch({
                type: ADD_TARGET_SUCCESS
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
