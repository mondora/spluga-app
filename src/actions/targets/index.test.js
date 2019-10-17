import { getTargets, addTarget } from ".";
import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Targets Action", () => {
    it("getTargets error", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;
        toArray.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await getTargets({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_TARGETS_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_TARGETS_ERROR");
    });

    it("getTargets success", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;

        toArray.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await getTargets({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_TARGETS_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_TARGETS_SUCCESS");
    });

    it("addTarget error", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addTarget({}, { id: "id" })(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_TARGET_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_TARGET_ERROR");
    });

    it("addTarget success", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;

        updateOne.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await addTarget({}, { id: "id" })(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_TARGET_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_TARGET_SUCCESS");
    });
});
