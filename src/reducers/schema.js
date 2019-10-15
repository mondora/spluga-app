import { auth } from "./auth";
import { getCompany, addCompany } from "./companies";
import { getUser, addUser } from "./users";
import { reducer as formReducer } from "redux-form";
import { addActivityUser, addActivityCompany } from "./activities";
import { getGoals } from "./goals";
import { getTargets, addTarget } from "./targets";
import { addInvitation, acceptInvitation } from "./team";
import { addApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
    auth,
    addActivityUser,
    addActivityCompany,
    getCompany,
    form: formReducer,
    addCompany,
    getGoals,
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
