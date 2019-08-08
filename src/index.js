import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Spin } from "antd";

import Routes from "./views";
import "antd/dist/antd.min.css";
import store from "./reducers";
import { persistor } from "./reducers/index";

import { SpinContainer } from "./styled";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={
                <SpinContainer>
                    <Spin size="large" />
                </SpinContainer>
            }
            persistor={persistor}
        >
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
