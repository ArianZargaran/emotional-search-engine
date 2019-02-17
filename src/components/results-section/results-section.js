import React, { useContext } from "react";
import { Store } from "../../state/store";
import PropTypes from "prop-types";

import SearchResult from "./search-result";

import "styles/results-section.css";

export default function ResultsSection() {
  const { state } = useContext(Store);
  const { results = [] } = state;

  if(!results) {
    return (
      <h1 className="search-result">
        <p className="search-result_title">Start Searching!</p>
      </h1>
    );
  }

  return (
    <section className="ese-results-section">
      <ul>
      { results.map((res, idx) => <SearchResult key={idx}>{res}</SearchResult>) }
      </ul>
    </section>
  );

}

ResultsSection.propTypes = {
  results: PropTypes.array
}
