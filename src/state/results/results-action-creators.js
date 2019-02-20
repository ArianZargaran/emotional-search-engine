export const FETCH_RESULTS = "FETCH_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS"

export function fetchResults(searchQuery) {	
  return {	
    type: FETCH_RESULTS,	
    payload: searchQuery	
  };	
}	

export function clearResults() {	
  return {
    type: CLEAR_RESULTS,	
    payload: null
  };	
}