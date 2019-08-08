import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

export const GET_COMPANY_START = "GET_COMPANY_START";
export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";

// Get a client for your Stitch app, or instantiate a new one
function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

/*
instantiate a mongoDb service client in mongodb variable for stitch service, 
with object mongodb i can get the collection handle
(one instance for get/add/remove)
*/

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

//DEFINE ACTION CREATORS
//getCompany info
export function getCompany(query) {
    return async dispatch => {
        dispatch({
            type: GET_COMPANY_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            const result = await collection.find(query).toArray();

            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: { companies: result }
            });
        } catch (error) {
            dispatch({
                type: GET_COMPANY_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}

export const ADD_COMPANY_START = "ADD_COMPANY_START";
export const ADD_COMPANY_SUCCESS = "ADD_COMPANY_SUCCESS";
export const ADD_COMPANY_ERROR = "ADD_COMPANY_ERROR";

export function addCompany(data, ownerId) {
    return async dispatch => {
        dispatch({
            type: ADD_COMPANY_START
        });

        /*
	
	DocumentT =	{
		_id: automatically insert
		ownerId":"5d307d2f9e861a411ba585ef",
		"name":"mondora srl sb"
	}
*/

        const collection = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            await collection.insertOne({ ownerId, ...data });

            dispatch({
                type: ADD_COMPANY_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ADD_COMPANY_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}

export const REMOVE_COMPANY_START = "REMOVE_COMPANY_START";
export const REMOVE_COMPANY_SUCCESS = "REMOVE_COMPANY_SUCCESS";
export const REMOVE_COMPANY_ERROR = "REMOVE_COMPANY_ERROR";

export function removeCompany(query) {
    return async dispatch => {
        dispatch({ type: REMOVE_COMPANY_START });

        const collection = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            const result = await collection.deleteOne(query);

            dispatch({
                type: REMOVE_COMPANY_SUCCESS,
                payload: { companies: result }
            });
        } catch (error) {
            dispatch({
                type: REMOVE_COMPANY_ERROR,
                error: error,
                errorInfo: error
            });
        }
    };
}
