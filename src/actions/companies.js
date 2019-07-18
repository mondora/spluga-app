import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const GET_COMPANY_START = "GET_COMPANY_START";
export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";

export function getCompany(query) {
  return async dispatch => {
    dispatch({
      type: GET_COMPANY_START
    });

    // Get a client for your Stitch app, or instantiate a new one
    const client = Stitch.hasAppClient(STITCH_APP_ID)
      ? Stitch.getAppClient(STITCH_APP_ID)
      : Stitch.initializeAppClient(STITCH_APP_ID);

    const mongodb = client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    const collection = mongodb.db(MONGO_DB_NAME).collection("companies");
    collection
      .find(query)
      .toArray()
      .then(result => {
        dispatch({
          type: GET_COMPANY_SUCCESS,
          payload: { companies: result }
        });
      })
      .catch(error => {
        dispatch({
          type: GET_COMPANY_ERROR,
          error: error,
          errorInfo: error
        });
      });
  };
}

export const ADD_COMPANY_START = "ADD_COMPANY_START";
export const ADD_COMPANY_SUCCESS = "ADD_COMPANY_SUCCESS";
export const ADD_COMPANY_ERROR = "ADD_COMPANY_ERROR";
export const ADD_COMPANY_RESET = "ADD_COMPANY_RESET";

export function addCompany(data, userId) {
  return async dispatch => {
    dispatch({
      type: ADD_COMPANY_START
    });

    try {
      // Get a client for your Stitch app, or instantiate a new one
      const client = Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);

      const mongodb = client.getServiceClient(
        RemoteMongoClient.factory,
        "mongodb-atlas"
      );
      const collection = mongodb.db(MONGO_DB_NAME).collection("companies");
      collection.insertOne({ ownerId: userId, ...data });
      dispatch({
        type: ADD_COMPANY_SUCCESS
      });
    } catch (e) {
      dispatch({
        type: ADD_COMPANY_ERROR,
        error: e,
        errorInfo: e
      });
    }
  };
}
