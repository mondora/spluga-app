import { auth } from "./auth";
import { read, write, remove } from "./companies";
import { getGoals, addGoal } from "./goals";
import { createApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
  auth,
  read,
  addGoal,
  write,
  getGoals,
  remove,
  createApp,
  getApps,
  enableApp,
  disableApp,
  deleteApp
};
