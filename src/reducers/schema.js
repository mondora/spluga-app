import { auth } from "./auth";
import { read, write, remove } from "./companies";
import { reducer as formReducer } from "redux-form";
import { getGoals, addGoal } from "./goals";
import { getTargets, addTarget } from "./targets";
import { addApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
    auth,
    read,
    form: formReducer,
    addGoal,
    write,
    getGoals,
    remove,
    addApp,
    getApps,
    enableApp,
    disableApp,
    deleteApp,
    getTargets,
    addTarget
};
