import { GET_GOALS_START, GET_GOALS_SUCCESS, GET_GOALS_ERROR } from "../../actions/goals";

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

export function getGoals(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case GET_GOALS_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case GET_GOALS_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case GET_GOALS_ERROR:
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
