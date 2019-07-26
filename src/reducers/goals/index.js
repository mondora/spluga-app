import {
	GET_SHARED_GOALS_START,
	GET_SHARED_GOALS_SUCCESS,
	GET_SHARED_GOALS_ERROR,
	GET_USER_GOALS_START,
	GET_USER_GOALS_SUCCESS,
	GET_USER_GOALS_ERROR,
	ADD_USER_GOAL_START,
	ADD_USER_GOAL_SUCCESS,
	ADD_USER_GOAL_ERROR
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

export function readGoal(state = defaultState, { type, payload, error }) {
	switch (type) {
		case GET_USER_GOALS_START || GET_SHARED_GOALS_START:
			return {
				status: {
					started: true,
					error: false,
					ended: false
				}
			};
		case GET_USER_GOALS_SUCCESS || GET_SHARED_GOALS_SUCCESS:
			return {
				status: {
					started: false,
					error: false,
					ended: true
				},
				...payload
			};
		case GET_USER_GOALS_ERROR || GET_SHARED_GOALS_ERROR:
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

export function writeGoal(state = defaultState, { type, payload, error }) {
	switch (type) {
		case ADD_USER_GOAL_START:
			return {
				status: {
					started: true,
					error: false,
					ended: false
				}
			};
		case ADD_USER_GOAL_SUCCESS:
			return {
				status: {
					started: false,
					error: false,
					ended: true
				},
				...payload
			};
		case ADD_USER_GOAL_ERROR:
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
