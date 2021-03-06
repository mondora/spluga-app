import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../../config";

export const GET_COMPANY_START = "GET_COMPANY_START";
export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export function getCompany(query) {
    return async dispatch => {
        dispatch({
            type: GET_COMPANY_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("companies");

        try {
            const result = await collection.findOne(query);
            dispatch({
                type: GET_COMPANY_SUCCESS,
                payload: { result }
            });
        } catch (error) {
            dispatch({
                type: GET_COMPANY_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export const ADD_COMPANY_START = "ADD_COMPANY_START";
export const ADD_COMPANY_SUCCESS = "ADD_COMPANY_SUCCESS";
export const ADD_COMPANY_ERROR = "ADD_COMPANY_ERROR";

export function addCompany(data, currentUser) {
    const { profile, id } = currentUser;
    const { picture, name, email } = profile.data;

    return async dispatch => {
        dispatch({
            type: ADD_COMPANY_START
        });

        const collection = mongodb.db(MONGO_DB_NAME).collection("companies");
        const createdAt = new Date();

        const company = {
            ...data,
            team: [{ id, role: "O", picture, name, email, status: "active", createdAt }],
            createdAt
        };
        try {
            const objectId = await collection.insertOne(company);

            dispatch({
                type: ADD_COMPANY_SUCCESS,
                payload: { company: objectId }
            });
        } catch (error) {
            dispatch({
                type: ADD_COMPANY_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
