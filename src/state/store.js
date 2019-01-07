import { createStore, applyMiddleware } from "redux";
import state from "./state";

const middleware = applyMiddleware();

const store = createStore(state, {}, middleware);

export default store;
