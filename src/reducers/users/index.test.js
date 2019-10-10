import {
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR
} from "../../actions/users";

import { getUser, addUser } from "../users";

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

describe("getUser", () => {
    it("set status to GET_USER_START", () => {
        stateRes = getUser(state, {
            type: GET_USER_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to GET_USER_SUCCESS", () => {
        stateRes = getUser(state, {
            type: GET_USER_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to GET_USER_ERROR", () => {
        stateRes = getUser(state, {
            type: GET_USER_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = getUser(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});

describe("addUser", () => {
    it("set status to ADD_USER_START", () => {
        stateRes = addUser(state, {
            type: ADD_USER_START
        });
        expect(stateRes.status).toEqual({ started: true, error: false, ended: false });
    });

    it("set status to ADD_USER_SUCCESS", () => {
        stateRes = addUser(state, {
            type: ADD_USER_SUCCESS,
            payload,
            error
        });

        expect(stateRes.status).toEqual({ started: false, error: false, ended: true });
        expect(stateRes.payload).toEqual(payload.payload);
    });

    it("set status to ADD_USER_ERROR", () => {
        stateRes = addUser(state, {
            type: ADD_USER_ERROR,
            payload,
            error,
            errorInfo: "error"
        });

        expect(stateRes.status).toEqual({ started: false, error: true, ended: false, errorInfo: error });
    });

    it("set status to default", () => {
        stateRes = addUser(defaultState, { type: null });
        expect(stateRes).toEqual(defaultState);
    });
});
