import axios from "axios";
import { useReducer, useEffect } from "react";
import { GET_JOBS, JOBS_LOADING, GET_ERRORS } from "./types";
import { reducer, initialState } from "../reducer/job";

const apiurl =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export function useGetJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: JOBS_LOADING });
    axios
      .get(apiurl, {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: GET_JOBS, payload: res.data });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: GET_ERRORS, payload: err.data });
      });
  }, [params, page]);
  return state;
}
