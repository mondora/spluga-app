import { auth } from "./auth";
import { read, write, remove } from "./companies";
import { getGoals, addGoal } from "./goals";
import { getTargets, addTarget } from "./targets";
import { addApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
  auth,
  read,
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
