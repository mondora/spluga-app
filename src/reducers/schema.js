import { auth } from "./auth";
import { getCompany, addCompany } from "./companies";
import { getUser, addUser } from "./users";
import { reducer as formReducer } from "redux-form";
import { addActivity, getActivities } from "./activities";
import { getGoals } from "./goals";
import { addTarget } from "./targets";
import { addInvitation, acceptInvitation } from "./team";
import { addApp, enableApp, disableApp, deleteApp } from "./apps";

export default {
    auth,
    addActivity,
    getActivities,
    getCompany,
    form: formReducer,
    addCompany,
    getGoals,
    addApp,
    enableApp,
    disableApp,
    deleteApp,
    addTarget,
    addInvitation,
    acceptInvitation,
    getUser,
    addUser
};
