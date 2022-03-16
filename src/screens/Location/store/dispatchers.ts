import { Coordinates } from "./types";
import ActionTypes from "./actions";

export const fetchOutletIdentifier = (coordinates: Coordinates) => {
  return {
    type: ActionTypes.FETCH_OUTLET_IDENTIFIER,
    payload: coordinates,
  };
};

export const fetchOutletIdentifierSuccess = (payload: any) => {
  return {
    type: ActionTypes.FETCH_OUTLET_IDENTIFIER_SUCCESS,
    payload,
  };
};

export const fetchOutletIdentifierFailed = (error: any) => {
  return {
    type: ActionTypes.FETCH_OUTLET_IDENTIFIER_FAILED,
    payload: { error },
  };
};

export const resetState = () => {
  return {
    type: ActionTypes.RESET_STATE,
    payload: {},
  };
};
