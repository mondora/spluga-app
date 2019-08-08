import {
    GET_GOALS_START,
    GET_GOALS_SUCCESS,
    GET_GOALS_ERROR,
    ADD_GOAL_START,
    ADD_GOAL_SUCCESS,
    ADD_GOAL_ERROR
} from "../../actions/goals";

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

export function getGoals(state = defaultState, { type, payload, error }) {
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
                    errorInfo: error
                }
            };
        default:
            return state;
    }
}

export function addGoal(state = defaultState, { type, payload, error }) {
    switch (type) {
        case ADD_GOAL_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false
                }
            };
        case ADD_GOAL_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true
                },
                ...payload
            };
        case ADD_GOAL_ERROR:
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
