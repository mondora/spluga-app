import { getUser, addUser } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Users Action", () => {
    const data = {};
    const currentUser = { profile: { data: {} } };

    it("getUser error", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await getUser({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_USER_ERROR");
    });

    it("getUser success", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await getUser({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_USER_SUCCESS");
    });

    it("addUser error", async () => {
        const dispatch = jest.fn();
        const insertOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().insertOne;
        insertOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addUser(data, currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_USER_ERROR");
    });

    it("addUser success", async () => {
        const dispatch = jest.fn();
        const insertOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().insertOne;
        insertOne.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await addUser(data, currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_USER_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_USER_SUCCESS");
    });
});
