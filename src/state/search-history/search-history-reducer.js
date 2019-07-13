import { SAVE_SEARCH_RESULTS } from "./search-history-action-creators";

export default (state, action) => {
  var mapActions = {
    [SAVE_SEARCH_RESULTS]: () => [...state, action.payload],
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};