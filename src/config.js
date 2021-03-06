let enableLogs = true;
if (process.env.REACT_APP_ENABLE_CONSOLE_LOGS === "false") {
    enableLogs = false;
}

export const ENABLE_CONSOLE_LOGS = enableLogs;

document.title = "Spluga";

export const STITCH_APP_ID = process.env.REACT_APP_STITCH_APP_ID;
export const MONGO_DB_NAME = process.env.REACT_APP_MONGO_DB_NAME || "spluga";
export const PUBLISHED_HOSTNAME = process.env.REACT_APP_PUBLISHED_HOSTNAME || "http://localhost:3000";
export const INFO_EMAIL = process.env.REACT_APP_INFO_EMAIL;
