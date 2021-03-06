import {
    ADD_APP_START,
    ADD_APP_SUCCESS,
    ADD_APP_ERROR,
    ENABLE_APP_START,
    ENABLE_APP_SUCCESS,
    ENABLE_APP_ERROR,
    DISABLE_APP_START,
    DISABLE_APP_SUCCESS,
    DISABLE_APP_ERROR,
    DELETE_APP_START,
    DELETE_APP_SUCCESS,
    DELETE_APP_ERROR
} from "../../actions/apps";

import { addApp, enableApp, disableApp, deleteApp } from "../apps";

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
describe("addApp", () => {
    it("set status to ADD_APP_START", () => {
        stateRes = addApp(state, {
            type: ADD_APP_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to ADD_APP_SUCCESS", () => {
        stateRes = addApp(state, {
            type: ADD_APP_SUCCESS,
            payload
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to ADD_APP_ERROR", () => {
        stateRes = addApp(state, {
            type: ADD_APP_ERROR,
            payload,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addApp(null, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("enableApp", () => {
    it("set status to ENABLE_APP_START", () => {
        stateRes = enableApp(state, {
            type: ENABLE_APP_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to ENABLE_APP_SUCCESS", () => {
        stateRes = enableApp(state, {
            type: ENABLE_APP_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to ENABLE_APP_ERROR", () => {
        stateRes = enableApp(state, {
            type: ENABLE_APP_ERROR,
            payload,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = enableApp(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("disableApp", () => {
    it("set status to DISABLE_APP_START", () => {
        stateRes = disableApp(state, {
            type: DISABLE_APP_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to DISABLE_APP_SUCCESS", () => {
        stateRes = disableApp(state, {
            type: DISABLE_APP_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to DISABLE_APP_ERROR", () => {
        stateRes = disableApp(state, {
            type: DISABLE_APP_ERROR,
            payload,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = disableApp(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("deleteApp", () => {
    it("set status to DELETE_APP_START", () => {
        stateRes = deleteApp(state, {
            type: DELETE_APP_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to DELETE_APP_SUCCESS", () => {
        stateRes = deleteApp(state, {
            type: DELETE_APP_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to DELETE_APP_ERROR", () => {
        stateRes = deleteApp(state, {
            type: DELETE_APP_ERROR,
            payload,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = deleteApp(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
