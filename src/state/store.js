import React, { useReducer } from "react";
import reducers from "./reducers";
import initialState from "./initial-state";

const Store = React.createContext();

const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducers, initialState);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
};

export { Store, Provider };