import { ADD_TARGET_START, ADD_TARGET_SUCCESS, ADD_TARGET_RESET, ADD_TARGET_ERROR } from "../../actions/targets";

import { addTarget } from "../targets";

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

describe("addTarget", () => {
    it("set status to ADD_TARGET_START", () => {
        stateRes = addTarget(state, {
            type: ADD_TARGET_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_TARGET_SUCCESS", () => {
        stateRes = addTarget(state, {
            type: ADD_TARGET_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_TARGET_ERROR", () => {
        stateRes = addTarget(state, {
            type: ADD_TARGET_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to ADD_TARGET_RESET", () => {
        stateRes = addTarget(state, {
            type: ADD_TARGET_RESET
        });

        expect(stateRes).toEqual(defaultState);
    });

    it("set status to default", () => {
        stateRes = addTarget(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
