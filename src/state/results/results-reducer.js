import { GET_RESULTS, CLEAR_RESULTS } from "./results-action-creators";

export default (state, action) => {
  var mapActions = {
    [GET_RESULTS]: () => action.payload,
    [CLEAR_RESULTS]: () => null,
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};