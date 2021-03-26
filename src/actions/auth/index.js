import * as Realm from "realm-web";
import { PUBLISHED_HOSTNAME, STITCH_APP_ID } from "../../config";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const CHECK_LOGIN_START = "LOGIN_START";
export const CHECK_LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const CHECK_LOGIN_ERROR = "LOGIN_ERROR";

/**
 * returns an instance of an app. If an app with the specified id hasn't been created, a new app instance will be created.
 */

const client = new Realm.App({ id: STITCH_APP_ID });

export const login = () => {
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
                client,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                error: true,
                errorInfo: { code: 500, message: error },
            });
        }
    };
};

export const checkLogin = () => {
    return async (dispatch) => {
        dispatch({
            type: CHECK_LOGIN_START,
        });

        try {
            if (client) {
                Realm.handleAuthRedirect();
            }
            let currentUser = null;

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
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGOUT_START,
        });

        try {
            const app = Realm.App.getApp({ id: STITCH_APP_ID });
            console.log("app", app);

            const logoutData = await app.currentUser.logOut();

            dispatch({
                type: LOGOUT_SUCCESS,
                logoutData,
            });
        } catch (error) {
            dispatch({
                type: LOGOUT_ERROR,
                error: true,
                errorInfo: { code: 500, message: error },
            });
        }
    };
};
