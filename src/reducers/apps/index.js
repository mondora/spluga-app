import {
  ADD_APP_START,
  ADD_APP_SUCCESS,
  ADD_APP_ERROR,
  GET_APPS_START,
  GET_APPS_SUCCESS,
  GET_APPS_ERROR,
  ENABLE_APP_START,
  ENABLE_APP_SUCCESS,
  ENABLE_APP_ERROR,
  DISABLE_APP_START,
  DISABLE_APP_SUCCESS,
  DISABLE_APP_ERROR,
  DELETE_APP_START,
  DELETE_APP_SUCCESS,
  DELETE_APP_ERROR
} from "../../actions/apps";

const defaultState = {
  status: {
    started: false,
    error: false,
    ended: false,
    errorInfo: {
      code: "",
      message: ""
    }
  }
};

export function addApp(state = defaultState, { type, payload, error }) {
  switch (type) {
    case ADD_APP_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case ADD_APP_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case ADD_APP_ERROR:
      return {
        ...state,
        status: {
          started: false,
          error: true,
          ended: false,
          errorInfo: error
        }
      };
    default:
      return defaultState;
  }
}

export function getApps(state = defaultState, { type, payload, error }) {
  switch (type) {
    case GET_APPS_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case GET_APPS_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case GET_APPS_ERROR:
      return {
        ...state,
        status: {
          started: false,
          error: true,
          ended: false,
          errorInfo: error
        }
      };
    default:
      return state;
  }
}

export function enableApp(state = defaultState, { type, payload, error }) {
  switch (type) {
    case ENABLE_APP_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case ENABLE_APP_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case ENABLE_APP_ERROR:
      return {
        ...state,
        status: {
          started: false,
          error: true,
          ended: false,
          errorInfo: error
        }
      };
    default:
      return state;
  }
}

export function disableApp(state = defaultState, { type, payload, error }) {
  switch (type) {
    case DISABLE_APP_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case DISABLE_APP_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case DISABLE_APP_ERROR:
      return {
        ...state,
        status: {
          started: false,
          error: true,
          ended: false,
          errorInfo: error
        }
      };
    default:
      return state;
  }
}

export function deleteApp(state = defaultState, { type, payload, error }) {
  switch (type) {
    case DELETE_APP_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case DELETE_APP_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case DELETE_APP_ERROR:
      return {
        ...state,
        status: {
          started: false,
          error: true,
          ended: false,
          errorInfo: error
        }
      };
    default:
      return state;
  }
}
