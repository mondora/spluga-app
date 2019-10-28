import { Stitch, UserApiKeyAuthProviderClient, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

export const ADD_APP_START = "ADD_APP_START";
export const ADD_APP_SUCCESS = "ADD_APP_SUCCESS";
export const ADD_APP_ERROR = "ADD_APP_ERROR";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
const providerClient = client.auth.getProviderClient(UserApiKeyAuthProviderClient.factory);
const companies = mongodb.db(MONGO_DB_NAME).collection("companies");

export function addApp(app, createdBy, companyId) {
    return async dispatch => {
        dispatch({
            type: ADD_APP_START
        });
        try {
            const result = await providerClient.createApiKey(app.name);
            app = { ...app, disabled: false, id: result.id };
            const companies = mongodb.db(MONGO_DB_NAME).collection("companies");

            companies.updateOne({ _id: companyId }, { $push: { apps: { ...app, createdAt: new Date(), createdBy } } });

            dispatch({
                type: ADD_APP_SUCCESS,
                payload: { app: result }
            });
        } catch (error) {
            dispatch({
                type: ADD_APP_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const ENABLE_APP_START = "ENABLE_APP_START";
export const ENABLE_APP_SUCCESS = "ENABLE_APP_SUCCESS";
export const ENABLE_APP_ERROR = "ENABLE_APP_ERROR";

export function enableApp(appId, companyId) {
    return async dispatch => {
        dispatch({
            type: ENABLE_APP_START
        });

        try {
            await providerClient.enableApiKey(appId);
            companies.updateOne(
                {
                    _id: companyId,
                    apps: {
                        $elemMatch: { id: appId }
                    }
                },
                { $set: { "apps.$.disabled": false } }
            );

            dispatch({
                type: ENABLE_APP_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ENABLE_APP_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const DISABLE_APP_START = "DISABLE_APP_START";
export const DISABLE_APP_SUCCESS = "DISABLE_APP_SUCCESS";
export const DISABLE_APP_ERROR = "DISABLE_APP_ERROR";

export function disableApp(appId, companyId) {
    return async dispatch => {
        dispatch({
            type: DISABLE_APP_START
        });
        try {
            await providerClient.disableApiKey(appId);
            companies.updateOne(
                {
                    _id: companyId,
                    apps: {
                        $elemMatch: { id: appId }
                    }
                },
                { $set: { "apps.$.disabled": true } }
            );

            dispatch({
                type: DISABLE_APP_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: DISABLE_APP_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const DELETE_APP_START = "DELETE_APP_START";
export const DELETE_APP_SUCCESS = "DELETE_APP_SUCCESS";
export const DELETE_APP_ERROR = "DELETE_APP_ERROR";

export function deleteApp(appId, companyId) {
    return async dispatch => {
        dispatch({
            type: DELETE_APP_START
        });

        try {
            await providerClient.deleteApiKey(appId);
            companies.updateOne({ _id: companyId }, { $pull: { apps: { id: appId } } });

            dispatch({
                type: DELETE_APP_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: DELETE_APP_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
