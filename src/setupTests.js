jest.mock("mongodb-stitch-browser-sdk", () => {
    const findOne = jest.fn();
    const toArray = jest.fn();
    const insertOne = jest.fn();
    const updateOne = jest.fn();
    const updateMany = jest.fn();
    const callFunction = jest.fn();
    const loginWithRedirect = jest.fn();
    const handleRedirectResult = jest.fn();
    const hasRedirectResult = jest.fn();

    const enableApiKey = jest.fn();
    const disableApiKey = jest.fn();
    const deleteApiKey = jest.fn();
    const createApiKey = jest.fn();

    return {
        RemoteMongoClient: { factory: () => {} },
        UserApiKeyAuthProviderClient: { factory: () => {} },
        Stitch: {
            hasAppClient: () => true,
            getAppClient: () => ({
                auth: {
                    getProviderClient: () => ({ enableApiKey, disableApiKey, deleteApiKey, createApiKey }),
                    loginWithRedirect,
                    handleRedirectResult,
                    hasRedirectResult,
                    isLoggedIn: true,
                    user: {}
                },
                callFunction,
                getServiceClient: () => ({
                    db: () => ({
                        collection: () => ({
                            findOne,
                            find: () => ({ toArray }),
                            insertOne,
                            updateOne,
                            updateMany
                        })
                    })
                })
            })
        }
    };
});

jest.mock("react-intl", () => {
    const intl = {
        formatMessage: jest.fn(({ id }) => id),
        formatHtmlMessage: jest.fn(({ id }) => id)
    };
    return {
        FormattedMessage: ({ id }) => <span>id</span>,
        FormattedNumber: () => <span />,
        FormattedHTMLMessage: ({ id }) => <span>id</span>,
        injectIntl: Component => props => <Component {...props} intl={intl} />,
        useIntl: () => intl,
        IntlProvider: ({ children }) => <div>{children}</div>
    };
});
