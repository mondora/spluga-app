import { ADD_ACTIVITY_START, ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_ERROR } from "../../actions/activities";

import { addActivity } from "../activities";

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

describe("addActivity", () => {
    it("set status to ADD_ACTIVITY_START", () => {
        stateRes = addActivity(state, {
            type: ADD_ACTIVITY_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_SUCCESS", () => {
        stateRes = addActivity(state, {
            type: ADD_ACTIVITY_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_ACTIVITY_ERROR", () => {
        stateRes = addActivity(state, {
            type: ADD_ACTIVITY_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addActivity(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
