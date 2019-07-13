export const GET_RESULTS = "GET_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export function getResults(fetchedResults) {	
  return {	
    type: GET_RESULTS,	
    payload: fetchedResults	
  };	
}

export function clearResults() {	
  return {
    type: CLEAR_RESULTS,	
    payload: null
  };	
}