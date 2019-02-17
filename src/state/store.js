import React, { useReducer } from "react";
import reducers from "./reducers";
import initialState from "./initial-state";

const Store = React.createContext();

const createStore = (reducer, initialState) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return { state, dispatch };
};

const Provider = ({ children }) => {
  const store = createStore(reducers, initialState);
  return <Store.Provider value={store}>{children}</Store.Provider>
};

export { Store, Provider };