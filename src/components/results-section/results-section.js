import React, { useContext } from "react";
import { Store } from "state/store";

import SearchResult from "./search-result";

import "styles/results-section.css";
import "styles/alert.css";

export default function ResultsSection() {
  const { state } = useContext(Store);
  const { results = [], alert = false } = state;

  const renderNoResults = () => (
    <h1 className="ese-search-result">
      <p className="ese-search-result_title">Start Searching!</p>
    </h1>
  );

  const renderResults = () => (
    <ul>
    { results.map((res, idx) => <SearchResult key={idx}>{res}</SearchResult>) }
    </ul>
  );

  const renderAlert = () => (
    <div className="ese-alert-danger">
      <p>
        <strong className="ese-alert-type">Error: </strong>There was an problem on our end trying to fetch results
      </p>
    </div>
  );

  return (
    <section className="ese-results-section">
      <div className="ese-results_section_wrapper">
      { alert && renderAlert() }
      { results ? renderResults() : renderNoResults() }
      </div>
    </section>
  );
};
