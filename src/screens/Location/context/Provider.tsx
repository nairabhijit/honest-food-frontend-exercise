import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "../store/reducer";
import { ReducerState } from "../store/types";

interface ContextProps {
  state: ReducerState;
  dispatch: (value: any) => void;
}
export const LocationContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

interface ProviderProps {
  children: JSX.Element;
}

const LocationProvider: React.FC<ProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LocationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
