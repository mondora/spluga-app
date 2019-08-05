import { auth } from "./auth";
import { read, write, remove } from "./companies";
import { readGoal, writeGoal } from "./goals";
import { createApp, getApps, enableApp, disableApp, deleteApp } from "./apps";

export default {
  auth,
  read,
  readGoal,
  write,
  writeGoal,
  remove,
  createApp,
  getApps,
  enableApp,
  disableApp,
  deleteApp
};
