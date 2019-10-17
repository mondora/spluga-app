jest.mock("mongodb-stitch-browser-sdk", () => {
    const findOne = jest.fn();
    const toArray = jest.fn();
    const insertOne = jest.fn();
    const updateOne = jest.fn();
    const callFunction = jest.fn();
    const loginWithRedirect = jest.fn();
    const handleRedirectResult = jest.fn();
    const hasRedirectResult = jest.fn();
    return {
        RemoteMongoClient: { factory: () => {} },

        Stitch: {
            hasAppClient: () => true,
            getAppClient: () => ({
                auth: { loginWithRedirect, handleRedirectResult, hasRedirectResult, isLoggedIn: true, user: {} },
                callFunction,
                getServiceClient: () => ({
                    db: () => ({
                        collection: () => ({
                            findOne,
                            find: () => ({ toArray }),
                            insertOne,
                            updateOne
                        })
                    })
                })
            })
        }
    };
});
