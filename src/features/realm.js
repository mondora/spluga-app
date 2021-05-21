import * as Realm from "realm-web";
import { PUBLISHED_HOSTNAME, STITCH_APP_ID } from "../config";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

//TODO: REMOVE auth files

// export const initializeRealmApp = createAsyncThunk("INITIALIZE_REALM_APP", async (thunkAPI) => {
//     try {
//         const application = new Realm.App({ id: STITCH_APP_ID });

//         return { currentUser: application.currentUser, isLoggedIn: false };
//     } catch (e) {
//         thunkAPI.rejectWithValue(e);
//     }
// });

export const logInWithGoogle = createAsyncThunk("LOGIN_WITH_GOOGLE", async () => {
    try {
        const app = new Realm.App({ id: STITCH_APP_ID });

        const credentials = Realm.Credentials.google(`${PUBLISHED_HOSTNAME}/`);
        console.log("ciao");
        // Calling logIn() opens a Google authentication screen in a new window.

        const user = await app.logIn(credentials);
        // The logIn() promise will not resolve until you call `handleAuthRedirect()`
        // from the new window after the user has successfully authenticated.
        console.log(`Logged in with id: ${user.id}`);
        return { currentUser: user, isLoggedIn: true };
    } catch (e) {
        console.log("e", e);
    }
});

export const logOut = createAsyncThunk("LOGOUT", async (thunkAPI) => {
    try {
        const app = Realm.App.getApp({ id: STITCH_APP_ID });

        await app.currentUser.logOut();

        return { currentUser: app.currentUser, isLoggedIn: false };
    } catch (e) {
        thunkAPI.rejectWithValue(e);
    }
});

const initialState = {
    currentUser: null,
    isLoggedIn: false,
    status: {
        errorInfo: "",
    },
};

export const realm = createReducer(initialState, {
    [logInWithGoogle.fulfilled]: (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.currentUser = action.payload.currentUser;
    },
    [logInWithGoogle.rejected]: (state, action) => {
        state.status.errorInfo = action.payload;
    },
    [logInWithGoogle.pending]: (state, action) => {
        console.log("pending...");
    },
    [logOut.fulfilled]: (state, action) => {
        state.currentUser = action.payload.currentUser;
        state.isLoggedIn = action.payload.isLoggedIn;
    },
    [logOut.rejected]: (state, { payload }) => {
        state.status.errorInfo = payload;
    },
    [logOut.pending]: (state) => {
        console.log("pending...");
    },
});
