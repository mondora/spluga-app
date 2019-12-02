import {
    ADD_ACTIVITY_ERROR,
    ADD_ACTIVITY_START,
    ADD_ACTIVITY_SUCCESS,
    GET_ACTIVITIES_ERROR,
    GET_ACTIVITIES_START,
    GET_ACTIVITIES_SUCCESS
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

export function addActivity(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_ACTIVITY_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_ACTIVITY_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_ACTIVITY_ERROR:
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

export function getActivities(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case GET_ACTIVITIES_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case GET_ACTIVITIES_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case GET_ACTIVITIES_ERROR:
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
