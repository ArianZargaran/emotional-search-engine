export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";

export const saveSearchResults = (results) => ({
  type: SAVE_SEARCH_RESULTS,
  payload: results
});