import moment from "moment";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { STITCH_APP_ID, MONGO_DB_NAME } from "../config";

function getClient() {
    return Stitch.hasAppClient(STITCH_APP_ID)
        ? Stitch.getAppClient(STITCH_APP_ID)
        : Stitch.initializeAppClient(STITCH_APP_ID);
}

const client = getClient();
const mongodb = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");

export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
export const ADD_ACTIVITY_SUCCESS = "ADD_ACTIVITY_SUCCESS";
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";
export function addActivityUser(data, currentUser, companyId, impact) {
    const { id } = currentUser;
    return async dispatch => {
        dispatch({
            type: ADD_ACTIVITY_START
        });

        try {
            const users = mongodb.db(MONGO_DB_NAME).collection("users");

            let activities = [
                {
                    ...data,
                    companyId
                }
            ];

            data.date = moment(data.date).toDate();

            //impact
            if (impact) {
                await impact.forEach(goal => {
                    const { key, quantity } = goal;
                    const { value, date, description } = data;
                    const impactActivity = {
                        goal: key,
                        value: quantity * value,
                        companyId,
                        date,
                        description
                    };

                    activities.push(impactActivity);
                });
            }

            await users.updateOne({ _id: id }, { $push: { activities: { $each: activities } } });

            dispatch({
                type: ADD_ACTIVITY_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ADD_ACTIVITY_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}

export function addActivityCompany(data, currentUser, companyId, impact) {
    const { id } = currentUser;
    return async dispatch => {
        dispatch({
            type: ADD_ACTIVITY_START
        });

        try {
            const companies = mongodb.db(MONGO_DB_NAME).collection("companies");
            let activities = [
                {
                    ...data,
                    userId: id
                }
            ];

            data.date = moment(data.date).toDate();

            const { goal, date } = data;

            //increment target actual
            await companies.updateOne(
                {
                    _id: companyId,
                    targets: { $elemMatch: { goal: goal, startDate: { $lte: date }, endDate: { $gte: date } } }
                },
                { $inc: { "targets.$.actual": data.value } }
            );

            //increment target actual impact
            if (impact) {
                await impact.forEach(goal => {
                    const { key, quantity } = goal;
                    const { value, date, description } = data;
                    const impactActivity = {
                        goal: key,
                        value: quantity * value,
                        userId: id,
                        date,
                        description
                    };
                    activities.push(impactActivity);

                    companies.updateOne(
                        {
                            _id: companyId,
                            targets: { $elemMatch: { goal: key, startDate: { $lte: date }, endDate: { $gte: date } } }
                        },
                        { $inc: { "targets.$.actual": impactActivity.value } }
                    );
                });
            }

            //add company activity
            await companies.updateOne({ _id: companyId }, { $push: { activities: { $each: activities } } });

            dispatch({
                type: ADD_ACTIVITY_SUCCESS
            });
        } catch (error) {
            dispatch({
                type: ADD_ACTIVITY_ERROR,
                error: true,
                errorInfo: { code: 500, message: error }
            });
        }
    };
}
