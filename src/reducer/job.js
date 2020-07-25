import { JOBS_LOADING, GET_JOBS, GET_ERRORS } from "../action/types";
export const initialState = {
  loading: true,
  jobs: [],
  job: [],
  error: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case JOBS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
