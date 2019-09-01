import {
    GET_COMPANY_START,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_ERROR,
    ADD_COMPANY_START,
    ADD_COMPANY_SUCCESS,
    ADD_COMPANY_ERROR,
    REMOVE_COMPANY_START,
    REMOVE_COMPANY_SUCCESS,
    REMOVE_COMPANY_ERROR
} from "../../actions/companies";

import { removeCompany, getCompany, addCompany } from "../companies";

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

describe("removeCompany", () => {
    it("set status to REMOVE_COMPANY_START", () => {
        stateRes = removeCompany(state, {
            type: REMOVE_COMPANY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to REMOVE_COMPANY_SUCCESS", () => {
        stateRes = removeCompany(state, {
            type: REMOVE_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to REMOVE_COMPANY_ERROR", () => {
        stateRes = removeCompany(state, {
            type: REMOVE_COMPANY_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = removeCompany(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("getCompany", () => {
    it("set status to GET_COMPANY_START", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to GET_COMPANY_SUCCESS", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to GET_COMPANY_ERROR", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = getCompany(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("addCompany", () => {
    it("set status to ADD_COMPANY_START", () => {
        stateRes = addCompany(state, {
            type: ADD_COMPANY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_COMPANY_SUCCESS", () => {
        stateRes = addCompany(state, {
            type: ADD_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_COMPANY_ERROR", () => {
        stateRes = addCompany(state, {
            type: ADD_COMPANY_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = addCompany(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
