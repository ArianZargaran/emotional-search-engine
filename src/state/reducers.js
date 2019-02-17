import results from "./results/result-reducer";

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState
      },
      {}
    );
  };
};

export default combineReducers({
  results
});

