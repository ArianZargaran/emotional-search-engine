import results from "./results/results-reducer";
import searchHistory from "./search-history/search-history-reducer";
import alert from "./alert/alert-reducer";

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
  results,
  searchHistory,
  alert
});

