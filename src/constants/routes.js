import { Activities } from "../views/activities";
import { Apps } from "../views/apps";
import { Companies } from "../views/companies";
import Cookie from "../views/cookie";
import Landing from "../views/landing";
import Privacy from "../views/privacy";
import { Profile } from "../views/profile";
import Root from "../views/root";
import Sdgs from "../views/sdgs";
import { Targets } from "../views/targets";

export const PROFILE = "/";
export const COMPANIES = "/companies";
export const TARGETS = "/targets";
export const APPS = "/apps";
export const SDGs = "/sdgs";
export const ACTIVITIES = "/activities";
export const COOKIE = "/cookie";
export const PRIVACY = "/privacy";

export const routesMap = {
    [PROFILE]: Profile,
    [COMPANIES]: Companies,
    [TARGETS]: Targets,
    [APPS]: Apps,
    [SDGs]: Sdgs,
    [ACTIVITIES]: Activities,
    [COOKIE]: Cookie,
    [PRIVACY]: Privacy,
    [true]: Root,
    [false]: Landing,
};
