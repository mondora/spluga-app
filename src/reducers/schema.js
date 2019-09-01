import { auth } from "./auth";
import { getCompany, addCompany, removeCompany } from "./companies";
import { reducer as formReducer } from "redux-form";
import { getGoals, addGoal } from "./goals";
import { getTargets, addTarget } from "./targets";
import { addApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
    auth,
    getCompany,
    form: formReducer,
    addGoal,
    addCompany,
    getGoals,
    removeCompany,
    addApp,
    getApps,
    enableApp,
    disableApp,
    deleteApp,
    getTargets,
    addTarget
};
