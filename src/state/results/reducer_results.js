import query from "../mock-back-end-response";
import { SEARCH_TERM, CLEAR_SEARCH_FORM } from "./action-creators";
import initialState from "./initial_state";

export default function(state = initialState, action) {
  var results = {
    [SEARCH_TERM]: () => query(action.payload),
    [CLEAR_SEARCH_FORM]: () => null,
    DEFAULT: () => state
  };

  return (results[action.type] || results.DEFAULT)();
}
