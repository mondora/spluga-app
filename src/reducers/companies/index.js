import {
  GET_COMPANY_START,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_ERROR,
  ADD_COMPANY_START,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR
} from "../../actions/companies";

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

export function read(state = defaultState, { type, payload, error }) {
  switch (type) {
    case GET_COMPANY_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case GET_COMPANY_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case GET_COMPANY_ERROR:
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

export function write(state = defaultState, { type, payload, error }) {
  switch (type) {
    case ADD_COMPANY_START:
      return {
        status: {
          started: true,
          error: false,
          ended: false
        }
      };
    case ADD_COMPANY_SUCCESS:
      return {
        status: {
          started: false,
          error: false,
          ended: true
        },
        ...payload
      };
    case ADD_COMPANY_ERROR:
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