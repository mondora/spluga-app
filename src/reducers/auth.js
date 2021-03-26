import { createReducer } from "@reduxjs/toolkit";

import { logInWithGoogle, logOut } from "../actions/auth";

const initialState = {
    app: null,
    currentUser: null,
    status: {
        started: false,
        error: false,
        ended: false,
        errorInfo: "",
    },
};

export const auth = createReducer(initialState, {
    [logInWithGoogle]: (state, { payload }) => {
        state.app = payload.app;
        state.currentUser = payload.user;
        state.status.started = true;
        state.status.ended = true;
    },
    [logInWithGoogle.rejected]: (state, { payload }) => {
        console.log("payload", payload);
        state.status.started = true;
        state.status.error = true;
        state.status.ended = true;
        state.status.errorInfo = payload;
    },
    [logInWithGoogle.pending]: (state) => {
        state.status.ended = false;
    },
    [logOut.fulfilled]: (state, { payload }) => {
        console.log("payload", payload);
        state.app = payload.app;
        state.currentUser = payload.currentUser;
        state.status.started = true;
        state.status.ended = true;
    },
    [logOut.rejected]: (state, { payload }) => {
        console.log("payload", payload);
        state.status.started = true;
        state.status.error = true;
        state.status.ended = true;
        state.status.errorInfo = payload;
    },
    [logOut.pending]: (state) => {
        state.status.ended = false;
    },
});
// export const auth = produce((state = initialState, action = {}) => {
//     switch (action.type) {
//         case LOGIN_START:
//         case CHECK_LOGIN_START:
//             return {
//                 ...state,
//                 status: {
//                     started: true,
//                     error: false,
//                     ended: false,
//                 },
//             };
//         case LOGIN_SUCCESS:
//         case CHECK_LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 status: {
//                     started: false,
//                     error: false,
//                     ended: true,
//                 },
//                 ...action.payload,
//             };
//         case LOGIN_ERROR:
//         case CHECK_LOGIN_ERROR:
//             return {
//                 ...state,
//                 status: {
//                     started: false,
//                     error: true,
//                     ended: false,
//                     errorInfo: action.error,
//                 },
//             };
//         default:
//             return state;
//     }
// });
