import {
    ADD_INVITATION_START,
    ADD_INVITATION_SUCCESS,
    ADD_INVITATION_ERROR,
    ADD_INVITATION_RESET,
    ACCEPT_INVITATION_ERROR,
    ACCEPT_INVITATION_START,
    ACCEPT_INVITATION_SUCCESS,
} from "../../actions/team";

const defaultState = {
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

export function addInvitation(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ADD_INVITATION_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false,
                },
            };
        case ADD_INVITATION_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true,
                },
                ...payload,
            };
        case ADD_INVITATION_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo,
                },
            };
        case ADD_INVITATION_RESET:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}

export function acceptInvitation(state = defaultState, { type, payload, errorInfo }) {
    switch (type) {
        case ACCEPT_INVITATION_START:
            return {
                status: {
                    started: true,
                    error: false,
                    ended: false,
                },
            };
        case ACCEPT_INVITATION_SUCCESS:
            return {
                status: {
                    started: false,
                    error: false,
                    ended: true,
                },
                ...payload,
            };
        case ACCEPT_INVITATION_ERROR:
            return {
                ...state,
                status: {
                    started: false,
                    error: true,
                    ended: false,
                    errorInfo,
                },
            };
        default:
            return state;
    }
}
