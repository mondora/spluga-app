import { addActivityCompany, addActivityUser } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Activities Action", () => {
    const data = { goal: "paperSaved", date: "2019-09-11", value: 0 };
    const currentUser = { id: "id" };
    const impact = [{ key: "paperSaved", value: 0 }];

    it("addActivityCompany error", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addActivityCompany(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_COMPANY_ERROR");
    });

    it("addActivityCompany success", async () => {
        const dispatch = jest.fn();
        const updateMany = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateMany;
        updateMany.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await addActivityCompany(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_COMPANY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_COMPANY_SUCCESS");
    });

    it("addActivityUser error", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addActivityUser(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_USER_ERROR");
    });

    it("addActivityUser success", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 0 });
        });

        await addActivityUser(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_USER_SUCCESS");
    });
});
