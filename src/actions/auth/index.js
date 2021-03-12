import * as Realm from "realm-web";
import { PUBLISHED_HOSTNAME, STITCH_APP_ID } from "../../config";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_RESET = "LOGIN_RESET";

export const CHECK_LOGIN_START = "LOGIN_START";
export const CHECK_LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const CHECK_LOGIN_ERROR = "LOGIN_ERROR";

/**
 * returns an instance of an app. If an app with the specified id hasn't been created, a new app instance will be created.
 */

const client = new Realm.App({ id: STITCH_APP_ID });

export function login() {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_START,
        });

        try {
            const credentials = Realm.Credentials.google(`${PUBLISHED_HOSTNAME}/`);

            // Calling logIn() opens a Google authentication screen in a new window.
            const user = await client.logIn(credentials);

            dispatch({
                type: LOGIN_SUCCESS,
                user,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                error: true,
                errorInfo: { code: 500, message: error },
            });
        }
    };
}

export function checkLogin() {
    return async (dispatch) => {
        dispatch({
            type: CHECK_LOGIN_START,
        });

        try {
            const client = Realm.App.getApp({ id: STITCH_APP_ID });
            let currentUser = null;
            if (client) {
                Realm.handleAuthRedirect();
            }

            if (client.currentUser) {
                let { id, profile, isLoggedIn, state } = client.currentUser;
                currentUser = { id, profile, isLoggedIn, state };

                dispatch({
                    type: CHECK_LOGIN_SUCCESS,
                    payload: {
                        currentUser,
                    },
                });
            }
        } catch (error) {
            dispatch({
                type: CHECK_LOGIN_ERROR,
                error: true,
                errorInfo: { code: 500, message: error },
            });
        }
    };
}
