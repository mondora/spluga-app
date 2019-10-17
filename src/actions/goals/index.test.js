import { getGoals } from ".";
import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Goals Action", () => {
    it("getGoals error", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;
        toArray.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await getGoals({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_GOALS_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_GOALS_ERROR");
    });

    it("getGoals success", async () => {
        const dispatch = jest.fn();
        const toArray = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection()
            .find().toArray;

        toArray.mockImplementationOnce(() => {
            return Promise.resolve([]);
        });

        await getGoals({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("GET_GOALS_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("GET_GOALS_SUCCESS");
    });
});
