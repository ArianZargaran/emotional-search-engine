import React from "react";
import { AppConsumer } from "context";
import PropTypes from "prop-types";

import SearchResult from "./search-result";

import "styles/results-section.css";

export default function ResultsSectionWrapper(props) {
  return (
    <AppConsumer>
      {context => (
        <ResultsSection {...props} ctxtProps={context}/>
      )}
    </AppConsumer>
  );
}

class ResultsSection extends React.Component {
  renderList() {
    const { results } = this.props.ctxtProps;
          
  if(!results) {
    return (
      <h1 className="search-result">
        <p className="search-result_title">Start Searching!</p>
      </h1>
    );
  }
  
  return results.map((res, idx) => (
    <SearchResult key={idx}>{res}</SearchResult>
    ));
  }

  render() {
    return (
      <section className="ese-results-section">
        <ul>{this.renderList()}</ul>
      </section>
    );
  }
}

ResultsSection.propTypes = {
  results: PropTypes.array
}
