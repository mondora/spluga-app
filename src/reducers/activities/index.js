import {
    ADD_ACTIVITY_COMPANY_ERROR,
    ADD_ACTIVITY_COMPANY_START,
    ADD_ACTIVITY_COMPANY_SUCCESS,
    ADD_ACTIVITY_USER_ERROR,
    ADD_ACTIVITY_USER_START,
    ADD_ACTIVITY_USER_SUCCESS
} from "../../actions/activities";

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

export function addActivityUser(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_ACTIVITY_USER_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_ACTIVITY_USER_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_ACTIVITY_USER_ERROR:
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

export function addActivityCompany(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_ACTIVITY_COMPANY_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_ACTIVITY_COMPANY_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_ACTIVITY_COMPANY_ERROR:
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
