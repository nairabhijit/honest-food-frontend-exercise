import axios, { CancelTokenSource } from "axios";
import { LocationContext } from "./../context/Provider";
import { getAxiosInstance } from "./../../../helpers/axios";
import { useContext, useEffect, useRef } from "react";
import {
  fetchOutletIdentifierSuccess,
  fetchOutletIdentifierFailed,
} from "../store/dispatchers";

const useOutletIdentifier = () => {
  const { state, dispatch } = useContext(LocationContext);
  const cancelTokenSource: { current: CancelTokenSource | undefined } =
    useRef();

  useEffect(() => {
    if (state.inProgress && state.coordinates) {
      // abort the previous request if already in progress
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel();
      }
      cancelTokenSource.current = axios.CancelToken.source();
      // get the outlet identifier for the given coordinates
      getAxiosInstance()
        .get(
          `/outlet-identifier?lat=${state.coordinates.lat}&lng=${state.coordinates.lng}`
        )
        .then((result) => {
          cancelTokenSource.current = undefined;
          dispatch(fetchOutletIdentifierSuccess(result.data));
        })
        .catch((err) => dispatch(fetchOutletIdentifierFailed(err)));
    }
  }, [state.inProgress, state.coordinates, dispatch]);
  return { state, dispatch };
};

export default useOutletIdentifier;
