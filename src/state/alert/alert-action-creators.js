export const SHOW_FETCH_RESULTS_ALERT = "SHOW FETCH RESULTS ALERT";

export const showFetchResultsAlert = (boolean) => ({
  type: SHOW_FETCH_RESULTS_ALERT,
  payload: boolean
});