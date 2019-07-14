import React from "react";
import PropTypes from "prop-types";

import "styles/search-result.css";

export function SearchResult({ children }) {
  return (
    <li className="ese-search-result">
      <h1 className="ese-search-result_title">{children.title}</h1>
      <a href={children.url} className="ese-search-result_url">{children.url}</a>
      <p className="ese-search-result_description">{children.description}</p>
      <p className="ese-search-result_emotion">{children.emotion}</p>
    </li>
  );
};

SearchResult.defaultProps = {
  children: {
    title: "No title was found",
    url: "This Site has no URL",
    description: "No description available",
    emotion: "No emotions detected"
  }
}

SearchResult.propTypes = {
  children: PropTypes.object
}

export default React.memo(SearchResult);