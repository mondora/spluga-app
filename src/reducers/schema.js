import { auth } from "./auth";
import { getCompany, addCompany, removeCompany } from "./companies";
import { getUser, addUser } from "./users";
import { reducer as formReducer } from "redux-form";
import { addActivity } from "./activities";
import { getGoals } from "./goals";
import { getTargets, addTarget } from "./targets";
import { addInvitation, acceptInvitation } from "./team";
import { addApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
    auth,
    addActivity,
    getCompany,
    form: formReducer,
    addCompany,
    getGoals,
    removeCompany,
    addApp,
    getApps,
    enableApp,
    disableApp,
    deleteApp,
    getTargets,
    addTarget,
    addInvitation,
    acceptInvitation,
    getUser,
    addUser
};
