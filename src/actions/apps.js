import { Stitch, UserApiKeyAuthProviderClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID } from "../config";

export const ADD_APP_START = "ADD_APP_START";
export const ADD_APP_SUCCESS = "ADD_APP_SUCCESS";
export const ADD_APP_ERROR = "ADD_APP_ERROR";

// Get a client for your Stitch app, or instantiate a new one
function getDefaultAppClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeDefaultAppClient(STITCH_APP_ID);
}

function getProviderClient() {
    const defaultAppClient = getDefaultAppClient();
    return defaultAppClient.auth.getProviderClient(UserApiKeyAuthProviderClient.factory);
}

export function addApp(appName) {
    return async dispatch => {
        dispatch({
            type: ADD_APP_START
        });

        const providerClient = getProviderClient();

        providerClient
            .createApiKey(appName)
            .then(result => {
                dispatch({
                    type: ADD_APP_SUCCESS,
                    payload: { app: result }
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_APP_ERROR,
                    error: error,
                    errorInfo: error
                });
            });
    };
}

export const GET_APPS_START = "GET_APPS_START";
export const GET_APPS_SUCCESS = "GET_APPS_SUCCESS";
export const GET_APPS_ERROR = "GET_APPS_ERROR";

export function getApps() {
    return async dispatch => {
        dispatch({
            type: GET_APPS_START
        });

        const providerClient = getProviderClient();

        providerClient
            .fetchApiKeys()
            .then(result => {
                dispatch({
                    type: GET_APPS_SUCCESS,
                    payload: { apps: result }
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_APPS_ERROR,
                    error: error,
                    errorInfo: error
                });
            });
    };
}

export const ENABLE_APP_START = "ENABLE_APP_START";
export const ENABLE_APP_SUCCESS = "ENABLE_APP_SUCCESS";
export const ENABLE_APP_ERROR = "ENABLE_APP_ERROR";

export function enableApp(appId) {
    return async dispatch => {
        dispatch({
            type: ENABLE_APP_START
        });

        const providerClient = getProviderClient();

        providerClient
            .enableApiKey(appId)
            .then(() => {
                dispatch({
                    type: ENABLE_APP_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: ENABLE_APP_ERROR,
                    error: error,
                    errorInfo: error
                });
            });
    };
}

export const DISABLE_APP_START = "DISABLE_APP_START";
export const DISABLE_APP_SUCCESS = "DISABLE_APP_SUCCESS";
export const DISABLE_APP_ERROR = "DISABLE_APP_ERROR";

export function disableApp(appId) {
    return async dispatch => {
        dispatch({
            type: DISABLE_APP_START
        });

        const providerClient = getProviderClient();

        providerClient
            .disableApiKey(appId)
            .then(() => {
                dispatch({
                    type: DISABLE_APP_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: DISABLE_APP_ERROR,
                    error: error,
                    errorInfo: error
                });
            });
    };
}

export const DELETE_APP_START = "DELETE_APP_START";
export const DELETE_APP_SUCCESS = "DELETE_APP_SUCCESS";
export const DELETE_APP_ERROR = "DELETE_APP_ERROR";

export function deleteApp(appId) {
    return async dispatch => {
        dispatch({
            type: DELETE_APP_START
        });

        const providerClient = getProviderClient();

        providerClient
            .deleteApiKey(appId)
            .then(() => {
                dispatch({
                    type: DELETE_APP_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: DELETE_APP_SUCCESS,
                    error: error,
                    errorInfo: error
                });
            });
    };
}
