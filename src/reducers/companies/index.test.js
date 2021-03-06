import {
    GET_COMPANY_START,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_ERROR,
    ADD_COMPANY_START,
    ADD_COMPANY_SUCCESS,
    ADD_COMPANY_ERROR
} from "../../actions/companies";

import { getCompany, addCompany } from "../companies";

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

describe("getCompany", () => {
    it("set status to GET_COMPANY_START", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to GET_COMPANY_SUCCESS", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to GET_COMPANY_ERROR", () => {
        stateRes = getCompany(state, {
            type: GET_COMPANY_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
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
    });

    it("set status to ADD_COMPANY_SUCCESS", () => {
        stateRes = addCompany(state, {
            type: ADD_COMPANY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to ADD_COMPANY_ERROR", () => {
        stateRes = addCompany(state, {
            type: ADD_COMPANY_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addCompany(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
