import { auth } from "./auth";
import { read, write, remove } from "./companies";
import { readGoal, writeGoal } from "./goals";

export default { auth, read, readGoal, write, writeGoal, remove };
