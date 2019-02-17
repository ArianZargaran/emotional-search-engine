export const SEARCH_TERM = "SEARCH_TERM";
export const CLEAR_SEARCH_FORM = "CLEAR_SEARCH_FORM"

 export function searchQuery(searchQuery) {	
  return {	
    type: SEARCH_TERM,	
    payload: searchQuery	
  };	
}	

 export function clearSearchForm() {	
  return {	
    type: CLEAR_SEARCH_FORM,	
    payload: []	
  };	
}