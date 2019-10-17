import { addInvitation, acceptInvitation } from ".";
import { Stitch } from "mongodb-stitch-browser-sdk";

describe("Team Action", () => {
    const currentUser = { id: "id", profile: { data: {} } };

    it("addInvitation error", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await addInvitation({})(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_INVITATION_ERROR");
    });

    it("addInvitation already exist", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.resolve({ team: [{ email: "name@mail.com" }] });
        });

        await addInvitation("name@mail.com")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_INVITATION_ERROR");
    });

    it("addInvitation success", async () => {
        const dispatch = jest.fn();
        const findOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().findOne;
        findOne.mockImplementationOnce(() => {
            return Promise.resolve({ team: [] });
        });

        const callFunction = Stitch.getAppClient().callFunction;
        callFunction.mockImplementationOnce();

        await addInvitation("name@mail.com")(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ADD_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ADD_INVITATION_SUCCESS");
    });

    it("acceptInvitation error", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;
        updateOne.mockImplementationOnce(() => {
            return Promise.reject();
        });

        await acceptInvitation(currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ACCEPT_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ACCEPT_INVITATION_ERROR");
    });

    it("acceptInvitation invalid link", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;

        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 0 });
        });

        await acceptInvitation(currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ACCEPT_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ACCEPT_INVITATION_ERROR");
    });

    it("acceptInvitation success", async () => {
        const dispatch = jest.fn();
        const updateOne = Stitch.getAppClient()
            .getServiceClient()
            .db()
            .collection().updateOne;

        updateOne.mockImplementationOnce(() => {
            return Promise.resolve({ modifiedCount: 1 });
        });

        await acceptInvitation(currentUser)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls[0][0].type).toEqual("ACCEPT_INVITATION_START");
        expect(dispatch.mock.calls[1][0].type).toEqual("ACCEPT_INVITATION_SUCCESS");
    });
});
