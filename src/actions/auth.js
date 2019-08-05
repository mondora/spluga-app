import { Stitch, GoogleRedirectCredential } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID } from "../config";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_RESET = "LOGIN_RESET";

export function login() {
  return async dispatch => {
    dispatch({
      type: LOGIN_START
    });

    try {
      //copy the name of your google-auth enabled stitch application here
      //the name of the app will typically be the stitch application name
      //with a "-"" + random string appended
      var currentUser = null;
      const appId = STITCH_APP_ID;

      // Get a client for your Stitch app, or instantiate a new one
      const client = Stitch.hasAppClient(appId)
        ? Stitch.getAppClient(appId)
        : Stitch.initializeAppClient(appId);

      //manage user authentication state

      // Check if this user has already authenticated and we're here
      // from the redirect. If so, process the redirect to finish login.
      if (client.auth.hasRedirectResult()) {
        await client.auth.handleRedirectResult();
        console.log("Processed redirect result.");
      }

      if (client.auth.isLoggedIn) {
        // The user is logged in. Add their user object to component state.
        currentUser = client.auth.user;
      } else {
        // The user has not yet authenticated. Begin the Google login flow.
        const credential = new GoogleRedirectCredential();
        client.auth.loginWithRedirect(credential);
      }

      if (currentUser) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            currentUser: {
              id: currentUser.id,
              profile: currentUser.profile
            }
          }
        });
      }
    } catch (e) {
      dispatch({
        type: LOGIN_ERROR,
        error: e,
        errorInfo: e
      });
    }
  };
}

export function resetLogin() {
  return {
    type: LOGIN_RESET
  };
}
