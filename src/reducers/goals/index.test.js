import {
    GET_GOALS_START,
    GET_GOALS_SUCCESS,
    GET_GOALS_ERROR,
    ADD_GOAL_START,
    ADD_GOAL_SUCCESS,
    ADD_GOAL_ERROR
} from "../../actions/goals";

import { getGoals, addGoal } from "../goals";

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
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to GET_GOALS_SUCCESS", () => {
        stateRes = getGoals(state, {
            type: GET_GOALS_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to GET_GOALS_ERROR", () => {
        stateRes = getGoals(state, {
            type: GET_GOALS_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = getGoals(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("addGoal", () => {
    it("set status to ADD_GOAL_START", () => {
        stateRes = addGoal(state, {
            type: ADD_GOAL_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_GOAL_SUCCESS", () => {
        stateRes = addGoal(state, {
            type: ADD_GOAL_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to ADD_GOAL_ERROR", () => {
        stateRes = addGoal(state, {
            type: ADD_GOAL_ERROR,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
        expect(stateRes.payload).toEqual(undefined);
        expect(stateRes.error).toEqual(undefined);
    });

    it("set status to default", () => {
        stateRes = addGoal(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
