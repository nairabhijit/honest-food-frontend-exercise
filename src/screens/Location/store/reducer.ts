import ActionTypes from "./actions";
import { Action, ReducerState } from "./types";

export const initialState = {
  coordinates: null,
  inProgress: false,
  success: false,
  failed: false,
  outletIdentifier: null,
};

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_OUTLET_IDENTIFIER:
      return {
        ...state,
        coordinates: action.payload,
        inProgress: true,
        success: false,
        failed: false,
      };
    case ActionTypes.FETCH_OUTLET_IDENTIFIER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: true,
        outletIdentifier: action.payload.details.outletIdentifier,
      };
    case ActionTypes.FETCH_OUTLET_IDENTIFIER_FAILED:
      return { ...state, inProgress: false, failed: true };
    case ActionTypes.RESET_STATE:
        console.log(initialState)
      return { ...initialState };
    default:
      return {...state};
  }
};

export default reducer;
