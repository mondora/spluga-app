import { addApp, disableApp, enableApp, deleteApp } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Apps Action", () => {
    it("addApps error", async () => {
        const dispatch = jest.fn();
        const createApiKey = Stitch.getAppClient().auth.getProviderClient().createApiKey;
        createApiKey.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addApp("app")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_APP_ERROR");
    });

    it("addApps success", async () => {
        const dispatch = jest.fn();
        const createApiKey = Stitch.getAppClient().auth.getProviderClient().createApiKey;
        createApiKey.mockImplementationOnce(() => {
            return Promise.resolve({ id: "id" });
        });
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await addApp("app")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_APP_SUCCESS");
    });

    it("enableApp error", async () => {
        const dispatch = jest.fn();
        const enableApiKey = Stitch.getAppClient().auth.getProviderClient().enableApiKey;
        enableApiKey.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await enableApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ENABLE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ENABLE_APP_ERROR");
    });

    it("enableApp success", async () => {
        const dispatch = jest.fn();
        const enableApiKey = Stitch.getAppClient().auth.getProviderClient().enableApiKey;
        enableApiKey.mockImplementationOnce(() => {
            return Promise.resolve();
        });

        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await enableApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ENABLE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ENABLE_APP_SUCCESS");
    });

    it("disableApp error", async () => {
        const dispatch = jest.fn();
        const disableApiKey = Stitch.getAppClient().auth.getProviderClient().disableApiKey;
        disableApiKey.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await disableApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("DISABLE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("DISABLE_APP_ERROR");
    });

    it("disableApp success", async () => {
        const dispatch = jest.fn();
        const disableApiKey = Stitch.getAppClient().auth.getProviderClient().disableApiKey;
        disableApiKey.mockImplementationOnce(() => {
            return Promise.resolve();
        });

        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await disableApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("DISABLE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("DISABLE_APP_SUCCESS");
    });

    it("deleteApp error", async () => {
        const dispatch = jest.fn();
        const deleteApiKey = Stitch.getAppClient().auth.getProviderClient().deleteApiKey;
        deleteApiKey.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await deleteApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("DELETE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("DELETE_APP_ERROR");
    });

    it("deleteApp success", async () => {
        const dispatch = jest.fn();
        const deleteApiKey = Stitch.getAppClient().auth.getProviderClient().deleteApiKey;
        deleteApiKey.mockImplementationOnce(() => {
            return Promise.resolve();
        });

        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await deleteApp("id", "companyId")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("DELETE_APP_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("DELETE_APP_SUCCESS");
    });
});
