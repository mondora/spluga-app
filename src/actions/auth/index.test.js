import { login, checkLogin } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";
describe("Auth Action", () => {
    it("login error", async () => {
        const dispatch = jest.fn();
        const loginWithRedirect = Stitch.getAppClient().auth.loginWithRedirect;

        loginWithRedirect.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await login()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("LOGIN_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("LOGIN_ERROR");
    });

    it("checkLogin error", async () => {
        const dispatch = jest.fn();
        const hasRedirectResult = Stitch.getAppClient().auth.hasRedirectResult;

        hasRedirectResult.mockImplementationOnce(() => {
            return Promise.resolve(true);
        });
        const handleRedirectResult = Stitch.getAppClient().auth.handleRedirectResult;

        handleRedirectResult.mockRejectedValue(new Error("Some kind of error"));

        await checkLogin()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("LOGIN_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("LOGIN_ERROR");
    });

    it("checkLogin success", async () => {
        const dispatch = jest.fn();
        const hasRedirectResult = Stitch.getAppClient().auth.hasRedirectResult;

        hasRedirectResult.mockImplementationOnce(() => {
            return Promise.resolve(true);
        });

        const handleRedirectResult = Stitch.getAppClient().auth.handleRedirectResult;

        handleRedirectResult.mockImplementationOnce(() => {
            return Promise.resolve(true);
        });

        await checkLogin()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("LOGIN_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("LOGIN_SUCCESS");
    });

    it("checkLogin success", async () => {
        const dispatch = jest.fn();
        const hasRedirectResult = Stitch.getAppClient().auth.hasRedirectResult;

        hasRedirectResult.mockImplementationOnce(() => {
            return Promise.resolve(true);
        });

        const handleRedirectResult = Stitch.getAppClient().auth.handleRedirectResult;

        handleRedirectResult.mockImplementationOnce(() => {
            return Promise.resolve(true);
        });

        await checkLogin()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("LOGIN_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("LOGIN_SUCCESS");
    });
});
