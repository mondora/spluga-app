import {
  GET_TARGETS_START,
  GET_TARGETS_SUCCESS,
  GET_TARGETS_ERROR,
  ADD_TARGET_START,
  ADD_TARGET_SUCCESS,
  ADD_TARGET_ERROR
} from "../../actions/targets";

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

export function getTargets(state = defaultState, { type, payload, error }) {
  switch (type) {
    case GET_TARGETS_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case GET_TARGETS_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case GET_TARGETS_ERROR:
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

export function addTarget(state = defaultState, { type, payload, error }) {
  switch (type) {
    case ADD_TARGET_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case ADD_TARGET_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case ADD_TARGET_ERROR:
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
