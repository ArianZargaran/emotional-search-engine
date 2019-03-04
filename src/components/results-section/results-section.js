import React, { useContext } from "react";
import { Store } from "state/store";
import PropTypes from "prop-types";

import SearchResult from "./search-result";

import "styles/results-section.css";

export default function ResultsSection() {
  const { state } = useContext(Store);
  const { results = [] } = state;

  const renderNoResults = () => (
    <h1 className="search-result">
      <p className="search-result_title">Start Searching!</p>
    </h1>
  );

  const renderResults = () => (
    <ul>
    { results.map((res, idx) => <SearchResult key={idx}>{res}</SearchResult>) }
    </ul>
  );

  return (
    <section className="ese-results-section">
      { results ? renderResults() : renderNoResults() }
    </section>
  );
}

ResultsSection.propTypes = {
  results: PropTypes.array
}
