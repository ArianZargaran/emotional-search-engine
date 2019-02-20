import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../state/store";
import PropTypes from "prop-types";
import { saveSearchResults } from "../../state/search-history/search-history-action-creators";

import SearchResult from "./search-result";

import "styles/results-section.css";

export default function ResultsSection() {
  const { state, dispatch } = useContext(Store);
  const { results = [] } = state;
  const [ data, setData ] = useState(results);

  useEffect(() => {
    if(results instanceof Promise) {
      results.then(
        response => {
          if (response.status == 200) {
            const fetchedResults = response.data.webPages && response.data.webPages.value
            .map(result => ({
              title: result.name,
              url:   result.url,
              description: result.snippet,
              emotion: "😒 10% | 😃 50% | 😱 35% | 🙈 5% | 😡 0%"
            }));
      
            setData(fetchedResults && fetchedResults);
            dispatch(saveSearchResults(response.data && response.data));
          } else {
            throw new Error(response.status);
          };
        }
      )
    }

    return () => setData(null)
  }, [results]);

  const renderNoResults = () => (
    <h1 className="search-result">
      <p className="search-result_title">Start Searching!</p>
    </h1>
  );

  const renderResults = () => (
    <ul>
    { data.map((res, idx) => <SearchResult key={idx}>{res}</SearchResult>) }
    </ul>
  );

  return (
    <section className="ese-results-section">
      { data ? renderResults() : renderNoResults() }
    </section>
  );
}

ResultsSection.propTypes = {
  results: PropTypes.array
}
