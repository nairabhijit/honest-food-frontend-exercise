import ActionTypes from "./actions";

export interface Coordinates {
  lat: number;
  lng: number;
}
export interface ReducerState {
  coordinates: Coordinates | null;
  inProgress: boolean;
  success: boolean;
  failed: boolean;
  outletIdentifier: string | null;
}
export interface Action {
  type: ActionTypes;
  payload: any;
}
