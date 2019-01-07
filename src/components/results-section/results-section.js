import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchResult from "./search-result";

import "styles/results-section.css";

class ResultsSection extends React.Component {
  renderList() {
    const { results } = this.props;

    if (!results) {
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

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

ResultsSection.propTypes = {
  results: PropTypes.array
}

export default connect(mapStateToProps)(ResultsSection);
