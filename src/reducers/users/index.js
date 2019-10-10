import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR
} from "../../actions/users";

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

export function getUser(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case GET_USER_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case GET_USER_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case GET_USER_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo
                }
            };
        default:
            return state;
    }
}

export function addUser(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_USER_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_USER_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_USER_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo
                }
            };
        default:
            return state;
    }
}
