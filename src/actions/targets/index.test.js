import { addTarget } from ".";
import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Targets Action", () => {
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
