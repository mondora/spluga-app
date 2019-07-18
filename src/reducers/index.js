import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import reducersSchema from "./schema";
import storage from "redux-persist/lib/storage/session";
import { ENABLE_CONSOLE_LOGS } from "../config";

const logger = createLogger({ collapsed: true });

const config = {
  key: "primary",
  storage,
  whitelist: ["auth", "sso"]
};
const persistedReducer = persistCombineReducers(config, reducersSchema);

const reducer = (state, action) => {
  return persistedReducer(state, action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const isRunningTest = "test" === process.env.NODE_ENV;

if (ENABLE_CONSOLE_LOGS && !isRunningTest) {
  console.log("Enable console logs", ENABLE_CONSOLE_LOGS);

  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;
