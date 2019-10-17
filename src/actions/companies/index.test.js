import { getCompany, addCompany } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Companies Action", () => {
    const data = {};
    const currentUser = { profile: { data: {} } };
    it("getCompany error", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await getCompany({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_COMPANY_ERROR");
    });

    it("getCompany success", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await getCompany({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_COMPANY_SUCCESS");
    });

    it("addCompany error", async () => {
        const dispatch = jest.fn();
        const insertOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().insertOne;
        insertOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addCompany(data, currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_COMPANY_ERROR");
    });

    it("addCompany success", async () => {
        const dispatch = jest.fn();
        const insertOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().insertOne;
        insertOne.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await addCompany(data, currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_COMPANY_SUCCESS");
    });
});
