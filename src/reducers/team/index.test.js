import {
    ADD_INVITATION_START,
    ADD_INVITATION_SUCCESS,
    ADD_INVITATION_ERROR,
    ACCEPT_INVITATION_ERROR,
    ACCEPT_INVITATION_START,
    ACCEPT_INVITATION_SUCCESS
} from "../../actions/team";

import { addInvitation, getPendingInvitation, acceptInvitation } from "../team";

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

let state = {};
let payload = { payload: "payload value" };
let error = "error";
let stateRes;

describe("addInvitation", () => {
    it("set status to ADD_INVITATION_START", () => {
        stateRes = addInvitation(state, {
            type: ADD_INVITATION_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_INVITATION_SUCCESS", () => {
        stateRes = addInvitation(state, {
            type: ADD_INVITATION_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_INVITATION_ERROR", () => {
        stateRes = addInvitation(state, {
            type: ADD_INVITATION_ERROR,
            payload,
            errorInfo: { code: 400, message: "error" }
        });

        expect(stateRes.status).toEqual({
            started: false,
            error: true,
            ended: false,
            errorInfo: { code: 400, message: "error" }
        });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = addInvitation(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("acceptInvitation", () => {
    it("set status to ACCEPT_INVITATION_START", () => {
        stateRes = acceptInvitation(state, {
            type: ACCEPT_INVITATION_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ACCEPT_INVITATION_SUCCESS", () => {
        stateRes = acceptInvitation(state, {
            type: ACCEPT_INVITATION_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ACCEPT_INVITATION_ERROR", () => {
        stateRes = acceptInvitation(state, {
            type: ACCEPT_INVITATION_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = acceptInvitation(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
