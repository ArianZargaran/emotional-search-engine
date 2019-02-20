import fetchResults from "utils/fetch-results-bing-promise";

import { FETCH_RESULTS, CLEAR_RESULTS } from "./results-action-creators";

export default (state, action) => {
  var mapActions = {
    [FETCH_RESULTS]: () => fetchResults(action.payload),
    [CLEAR_RESULTS]: () => null,
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};