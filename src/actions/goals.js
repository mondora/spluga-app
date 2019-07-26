import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

//user goals (users can write/read/remove)
export const GET_USER_GOALS_START = "GET_USER_GOALS_START";
export const GET_USER_GOALS_SUCCESS = "GET_USER_GOALS_SUCCESS";
export const GET_USER_GOALS_ERROR = "GET_USER_GOALS_ERROR";

//company goals (user can only read)
export const GET_SHARED_GOALS_START = "GET_SHARED_GOALS_START";
export const GET_SHARED_GOALS_SUCCESS = "GET_SHARED_GOALS_SUCCESS";
export const GET_SHARED_GOALS_ERROR = "GET_SHARED_GOALS_ERROR";

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
//get user goals
export function getUserGoals(query) {
	return async dispatch => {
		dispatch({
			type: GET_USER_GOALS_START
		});

		const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

		try {
			//only ownerId data
			const result = await collection.find(query).toArray();

			dispatch({
				type: GET_USER_GOALS_SUCCESS,
				payload: { goals: result }
			});
		} catch (error) {
			dispatch({
				type: GET_USER_GOALS_ERROR,
				error: error,
				errorInfo: error
			});
		}
	};
}

//shared data (company ownerId)
export function getSharedGoals(query) {
	return async dispatch => {
		dispatch({ type: GET_SHARED_GOALS_START });

		const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

		try {
			const result = await collection.find(query).toArray();

			dispatch({
				type: GET_SHARED_GOALS_SUCCESS,
				payload: { goals: result }
			});
		} catch (error) {
			dispatch({
				type: GET_SHARED_GOALS_ERROR,
				error: error,
				errorInfo: error
			});
		}
	};
}

export const ADD_USER_GOAL_START = "ADD_USER_GOAL_START";
export const ADD_USER_GOAL_SUCCESS = "ADD_USER_GOAL_SUCCESS";
export const ADD_USER_GOAL_ERROR = "ADD_USER_GOAL_ERROR";
//with user ownerId, i can add only my goals (in this case user is also company)
export function addUserGoal(ownerId, data) {
	return async dispatch => {
		dispatch({
			type: ADD_USER_GOAL_START
		});

		/*
	
	DocumentT =	{
		_id: automatically insert
        "ownerId":"5d307d2f9e861a411ba585ef",
        "name":"Water saved"
        "description":"Liters of water saved"
        "uom":"ltr"
    }

    DocumentT =	{
		_id: automatically insert
        "ownerId":"5d307d2f9e861a411ba585ef",  
        "name":"Paper Saved"
        "description":"Number of paper sheets saved"
        "uom":"sheet"
	}
*/

		const collection = mongodb.db(MONGO_DB_NAME).collection("goals");

		try {
			await collection.insertOne({ ownerId, ...data });

			dispatch({
				type: ADD_USER_GOAL_SUCCESS
			});
		} catch (error) {
			dispatch({
				type: ADD_USER_GOAL_ERROR,
				error: error,
				errorInfo: error
			});
		}
	};
}
