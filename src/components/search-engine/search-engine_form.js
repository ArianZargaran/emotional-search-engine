import React, { useContext, useState } from "react";
import get from "lodash/get";
import { Store } from "state/store";
import { clearResults, getResults } from "state/results/results-action-creators";
import { saveSearchResults } from "state/search-history/search-history-action-creators";
import fetchResults from "utils/fetch-results-bing-promise";
import { emptyString } from "utils/search_strings";

// import SearchEngineMicro from "./search-engine_micro";

import "styles/search-engine_form.css";

export default function SearchForm() {
  const [ term, setTerm ] = useState("");
  const { dispatch } = useContext(Store);

  return (
      <form
      onSubmit={handleSubmit}
      action="#"
      className="ese-search-engine_form"
      >
        <input
          type="text"
          value={term}
          onChange={(ev) => onInputChange(ev)}
          className="ese-search-engine_field"
          placeholder="Search..."
          autoFocus
        />
        {/* <SearchEngineMicro /> */}
        <input className="ese-search-engine_submit" type="submit" value="" />
      </form>
  );

  function onInputChange(ev) {
    const term = ev.target.value;

    setTerm(term);
  }
  
  function handleSubmit(ev) {
    ev.preventDefault();

    if (term.match(emptyString)) {
      dispatch(clearResults());
    } else {
      fetchResults(term).then(
        response => {
          if (response && response.status === 200) {
            const fetchedResults = get(response.data.webPages, "value")
            .map(result => ({
              title: result.name,
              url:   result.url,
              description: result.snippet,
              emotion: "😒 10% | 😃 50% | 😱 35% | 🙈 5% | 😡 0%"
            }));
      
            dispatch(getResults(fetchedResults))
            dispatch(saveSearchResults(fetchedResults));

          } else {
            //TODO: render alert when console Errors out because Bing doesn't serve any result for that particular query
            console.error("There was an error on our end trying to fetch data")
            throw new Error(response && response.status);
          };
        },
        error => { console.error(error); }
      )
    };
  }
};