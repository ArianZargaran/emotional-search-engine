import { SHOW_FETCH_RESULTS_ALERT } from "./alert-action-creators";

export default (state, action) => {
  var mapActions = {
    [SHOW_FETCH_RESULTS_ALERT]: () => action.payload,
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};