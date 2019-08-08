import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/auth";

const defaultState = {
    status: {
        started: false,
        error: false,
        ended: false,
        errorInfo: {
            code: "",
            message: ""
        }
    }
};

//an action is defined by: TYPE(LOGIN-ERR....), PAYLOD: user data and ERROR: in case that an error occurs
export function auth(state = defaultState, { type, payload, error }) {
    switch (type) {
        case LOGIN_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case LOGIN_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo: error
                }
            };
        default:
            return state;
    }
}
