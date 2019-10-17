import { Stitch, GoogleRedirectCredential } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID } from "../../config";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_RESET = "LOGIN_RESET";

const client = Stitch.hasAppClient(STITCH_APP_ID)
    ? Stitch.getAppClient(STITCH_APP_ID)
    : Stitch.initializeAppClient(STITCH_APP_ID);

export function login() {
    return async dispatch => {
        dispatch({
            type: LOGIN_START
        });

        try {
            const credential = new GoogleRedirectCredential();
            client.auth.loginWithRedirect(credential);
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export function checkLogin() {
    return async dispatch => {
        dispatch({
            type: LOGIN_START
        });

        try {
            var currentUser = null;

            if (client.auth.hasRedirectResult()) {
                await client.auth.handleRedirectResult();
            }

            if (client.auth.isLoggedIn) {
                currentUser = { id: client.auth.user.id, profile: client.auth.user.profile };
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        currentUser
                    }
                });
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
