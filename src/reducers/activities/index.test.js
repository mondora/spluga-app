import {
    ADD_ACTIVITY_COMPANY_ERROR,
    ADD_ACTIVITY_COMPANY_START,
    ADD_ACTIVITY_COMPANY_SUCCESS,
    ADD_ACTIVITY_USER_ERROR,
    ADD_ACTIVITY_USER_START,
    ADD_ACTIVITY_USER_SUCCESS
} from "../../actions/activities";

import { addActivityUser, addActivityCompany } from "../activities";

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

describe("addActivityUser", () => {
    it("set status to ADD_ACTIVITY_USER_START", () => {
        stateRes = addActivityUser(state, {
            type: ADD_ACTIVITY_USER_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_USER_SUCCESS", () => {
        stateRes = addActivityUser(state, {
            type: ADD_ACTIVITY_USER_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_USER_ERROR", () => {
        stateRes = addActivityUser(state, {
            type: ADD_ACTIVITY_USER_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addActivityUser(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("addActivityCompany", () => {
    it("set status to ADD_ACTIVITY_COMPANY_START", () => {
        stateRes = addActivityCompany(state, {
            type: ADD_ACTIVITY_COMPANY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_COMPANY_SUCCESS", () => {
        stateRes = addActivityCompany(state, {
            type: ADD_ACTIVITY_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_COMPANY_ERROR", () => {
        stateRes = addActivityCompany(state, {
            type: ADD_ACTIVITY_COMPANY_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addActivityCompany(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
