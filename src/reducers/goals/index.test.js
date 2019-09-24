import { GET_GOALS_START, GET_GOALS_SUCCESS, GET_GOALS_ERROR } from "../../actions/goals";

import { getGoals } from "../goals";

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

describe("getGoals", () => {
    it("set status to GET_GOALS_START", () => {
        stateRes = getGoals(state, {
            type: GET_GOALS_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to GET_GOALS_SUCCESS", () => {
        stateRes = getGoals(state, {
            type: GET_GOALS_SUCCESS,
            payload
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to GET_GOALS_ERROR", () => {
        stateRes = getGoals(state, {
            type: GET_GOALS_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = getGoals(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
