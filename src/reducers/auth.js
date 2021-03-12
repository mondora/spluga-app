import {
    LOGIN_START,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    CHECK_LOGIN_START,
    CHECK_LOGIN_ERROR,
    CHECK_LOGIN_SUCCESS,
} from "../actions/auth";

import produce from "immer";

const initialState = {
    status: {
        started: false,
        error: false,
        ended: false,
        errorInfo: {
            code: "",
            message: "",
        },
    },
};
export const auth = produce((state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_START:
        case CHECK_LOGIN_START:
            return {
                ...state,
                status: {
                    started: true,
                    error: false,
                    ended: false,
                },
            };
        case LOGIN_SUCCESS:
        case CHECK_LOGIN_SUCCESS:
            return {
                ...state,
                status: {
                    started: false,
                    error: false,
                    ended: true,
                },
                ...action.payload,
            };
        case LOGIN_ERROR:
        case CHECK_LOGIN_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo: action.error,
                },
            };
        default:
            return state;
    }
});
