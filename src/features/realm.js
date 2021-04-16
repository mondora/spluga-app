import * as Realm from "realm-web";
import { PUBLISHED_HOSTNAME, STITCH_APP_ID } from "../config";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const initializeRealmApp = createAsyncThunk("INITIALIZE_REALM_APP", async (thunkAPI) => {
    try {
        const application = new Realm.App({ id: STITCH_APP_ID });

        return { currentUser: application.currentUser, isLoggedIn: false };
    } catch (e) {
        thunkAPI.rejectWithValue(e);
    }
});

export const logInWithGoogle = createAsyncThunk("LOGIN_WITH_GOOGLE", async (thunkAPI) => {
    try {
        const app = Realm.App.getApp({ id: STITCH_APP_ID });

        const credentials = Realm.Credentials.google(`${PUBLISHED_HOSTNAME}/`);

        // Calling logIn() opens a Google authentication screen in a new window.
        const user = await app.logIn(credentials);

        Realm.handleAuthRedirect();

        return { currentUser: user, isLoggedIn: true };
    } catch (e) {
        thunkAPI.rejectWithValue(e);
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
        started: false,
        error: false,
        ended: false,
        errorInfo: "",
    },
};

export const realm = createReducer(initialState, {
    [initializeRealmApp.rejected]: (state, action) => {
        state.status.errorInfo = action.payload;
    },
    [initializeRealmApp.pending]: (state) => {
        console.log("pending initialize");
    },
    [initializeRealmApp.fulfilled]: (state, action) => {
        const { currentUser, isLoggedIn } = action.payload;
        state.currentUser = currentUser;
        state.isLoggedIn = isLoggedIn;
    },
    [logInWithGoogle.fulfilled]: (state, action) => {
        const { currentUser, isLoggedIn } = action.payload;
        state.currentUser = currentUser;
        state.isLoggedIn = isLoggedIn;
        state.status.ended = true;
    },
    [logInWithGoogle.rejected]: (state, action) => {
        state.status.error = true;
        state.status.ended = true;
        state.status.errorInfo = action.payload;
    },
    [logInWithGoogle.pending]: (state, action) => {
        state.status.started = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
        state.currentUser = payload.currentUser;
        state.status.ended = true;
    },
    [logOut.rejected]: (state, { payload }) => {
        state.status.error = true;
        state.status.ended = true;
        state.status.errorInfo = payload;
    },
    [logOut.pending]: (state) => {
        state.status.started = true;
        state.status.ended = false;
    },
});
