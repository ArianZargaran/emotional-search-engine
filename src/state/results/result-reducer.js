import searchQuery from "utils/mock-back-end-response";
import { SEARCH_TERM, CLEAR_SEARCH_FORM } from "./action-creators";

export default (state, action) => {
  var mapActions = {
    [SEARCH_TERM]: () => searchQuery(action.payload),
    [CLEAR_SEARCH_FORM]: () => null,
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};