import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const GET_GOALS_START = "GET_GOALS_START";
export const GET_GOALS_SUCCESS = "GET_GOALS_SUCCESS";
export const GET_GOALS_ERROR = "GET_GOALS_ERROR";

// Get a client for your Stitch app, or instantiate a new one
function getClient() {
  return Stitch.hasAppClient(STITCH_APP_ID)
    ? Stitch.getAppClient(STITCH_APP_ID)
    : Stitch.initializeAppClient(STITCH_APP_ID);
}

/*
instantiate a mongoDb service client in mongodb variable for stitch service, 
with object mongodb i can get the collection handle: one instance for get/add/remove
*/

const client = getClient();
const mongodb = client.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

//DEFINE ACTION CREATORS
export function getGoals(query) {
  return async dispatch => {
    console.log("get");
    dispatch({
      type: GET_GOALS_START
    });
    const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

    try {
      //only ownerId data
      const result = await collection.find(query).toArray();

      dispatch({
        type: GET_GOALS_SUCCESS,
        payload: { goals: result }
      });
    } catch (error) {
      dispatch({
        type: GET_GOALS_ERROR,
        error: error,
        errorInfo: error
      });
    }
  };
}

export const ADD_GOAL_START = "ADD_GOAL_START";
export const ADD_GOAL_SUCCESS = "ADD_GOAL_SUCCESS";
export const ADD_GOAL_ERROR = "ADD_GOAL_ERROR";
export function addGoal(ownerId, data) {
  return async dispatch => {
    console.log({ ownerId });
    console.log({ data });
    dispatch({
      type: ADD_GOAL_START
    });

    const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

    try {
      const result = await collection.insertOne({ ownerId, ...data });

      dispatch({
        type: ADD_GOAL_SUCCESS,
        payload: { goal: result }
      });
    } catch (error) {
      dispatch({
        type: ADD_GOAL_ERROR,
        error: error,
        errorInfo: error
      });
    }
  };
}
