import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import moment from "moment";
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

async function upsertActivity(data, id, collectionName) {
    const collection = mongodb.db(MONGO_DB_NAME).collection(collectionName);
    const { goal, description, date, companyId, userId, value } = data;

    const result = await collection.updateOne(
        {
            _id: id,
            activities: {
                $elemMatch: {
                    goal: goal,
                    description: description,
                    date: date,
                    userId: userId,
                    companyId: companyId
                }
            }
        },
        { $inc: { "activities.$.value": value } }
    );

    if (result.modifiedCount === 0) {
        await collection.updateOne({ _id: id }, { $push: { activities: data } });
    }
}

export function addActivityUser(data, currentUser, companyId, impact) {
    return async dispatch => {
        dispatch({
            type: ADD_ACTIVITY_START
        });

        try {
            const { id } = currentUser;
            let result = [data];
            await upsertActivity({ ...data, companyId }, id, "users");

            //impact
            if (impact) {
                impact.forEach(async goal => {
                    const { key, quantity } = goal;
                    const { date, description } = data;
                    const value = data.value * quantity;
                    const activityImpact = {
                        description,
                        date,
                        goal: key,
                        companyId,
                        value
                    };
                    result.push(activityImpact);
                    await upsertActivity(activityImpact, id, "users");
                });
            }

            dispatch({
                type: ADD_ACTIVITY_SUCCESS,
                payload: { result: result }
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
    return async dispatch => {
        dispatch({
            type: ADD_ACTIVITY_START
        });

        try {
            const companies = mongodb.db(MONGO_DB_NAME).collection("companies");
            const { goal, date, value } = data;
            let result = [data];

            await upsertActivity({ ...data, userId: currentUser.id }, companyId, "companies");

            //increment target actual
            await companies.updateOne(
                {
                    _id: companyId,
                    targets: {
                        $elemMatch: {
                            goal: goal,
                            startDate: { $lte: moment(date).toDate() },
                            endDate: { $gte: moment(date).toDate() }
                        }
                    }
                },
                { $inc: { "targets.$.actual": value } }
            );

            //increment target actual impact
            if (impact) {
                await impact.forEach(goal => {
                    const { key, quantity } = goal;
                    const { value, date, description } = data;
                    const impactValue = quantity * value;
                    const activityImpact = {
                        description,
                        date,
                        goal: key,
                        userId: currentUser.id,
                        value: impactValue
                    };
                    result.push(activityImpact);
                    upsertActivity(activityImpact, companyId, "companies");

                    companies.updateOne(
                        {
                            _id: companyId,
                            targets: {
                                $elemMatch: {
                                    goal: key,
                                    startDate: { $lte: moment(date).toDate() },
                                    endDate: { $gte: moment(date).toDate() }
                                }
                            }
                        },
                        { $inc: { "targets.$.actual": impactValue } }
                    );
                });
            }

            dispatch({
                type: ADD_ACTIVITY_SUCCESS,
                payload: { result: result }
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
