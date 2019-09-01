import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/auth";

import { auth } from "./auth";

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

describe("auth", () => {
    it("set status to LOGIN_START", () => {
        stateRes = auth(state, {
            type: LOGIN_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to LOGIN_SUCCESS", () => {
        stateRes = auth(state, {
            type: LOGIN_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to LOGIN_ERROR", () => {
        stateRes = auth(state, {
            type: LOGIN_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = auth(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
