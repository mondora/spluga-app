import * as Realm from "realm-web";
import { PUBLISHED_HOSTNAME, STITCH_APP_ID } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logInWithGoogle = createAsyncThunk("LOGIN_WITH_GOOGLE", async (thunkAPI) => {
    try {
        const app = new Realm.App({ id: STITCH_APP_ID });

        console.log("app", app);

        const credentials = Realm.Credentials.google(`${PUBLISHED_HOSTNAME}/`);

        // Calling logIn() opens a Google authentication screen in a new window.
        const user = await app.logIn(credentials);
        console.log("eeee");
        return { app, user };
    } catch (e) {
        thunkAPI.rejectWithValue(e);
    }
});

export const logOut = createAsyncThunk("LOGOUT", async (thunkAPI) => {
    try {
        const app = Realm.App.getApp({ id: STITCH_APP_ID });

        await app.currentUser.logOut();

        return { app, currentUser: app.currentUser };
    } catch (e) {
        thunkAPI.rejectWithValue(e);
    }
});
