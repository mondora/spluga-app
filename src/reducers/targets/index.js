import { ADD_TARGET_START, ADD_TARGET_RESET, ADD_TARGET_SUCCESS, ADD_TARGET_ERROR } from "../../actions/targets";

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

export function addTarget(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_TARGET_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_TARGET_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_TARGET_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo
                }
            };
        case ADD_TARGET_RESET:
            return {
                ...defaultState
            };
        default:
            return state;
    }
}
