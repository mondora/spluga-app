import { addActivity, getActivities } from ".";

import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Activities Action", () => {
    const data = { goal: "paperSaved", date: "2019-09-11", value: 0 };
    const currentUser = { id: "id" };
    const impact = [{ key: "paperSaved", value: 0 }];

    it("addActivity error", async () => {
        const dispatch = jest.fn();
        const callFunction = Stitch.getAppClient().callFunction;
        callFunction.mockRejectedValue(new Error("Some kind of error"));

        await addActivity(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_ERROR");
    });

    it("addActivity success", async () => {
        const dispatch = jest.fn();
        const callFunction = Stitch.getAppClient().callFunction;
        callFunction.mockImplementation();

        await addActivity(data, currentUser, "companyId", impact)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_ACTIVITY_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_ACTIVITY_SUCCESS");
    });

    it("getActivities error", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;
        toArray.mockRejectedValue(new Error("Some kind of error"));

        await getActivities({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_ACTIVITIES_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_ACTIVITIES_ERROR");
    });

    it("getActivities success", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;
        toArray.mockImplementation();

        await getActivities({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_ACTIVITIES_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_ACTIVITIES_SUCCESS");
    });
});
