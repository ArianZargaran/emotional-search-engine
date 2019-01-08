import React from "react";
import PropTypes from "prop-types";

import "styles/search-result.css";

const searchResult = ({ children }) => {
  return (
    <li className="search-result">
      <h1 className="search-result_title">{children.title}</h1>
      <a href={children.url} className="search-result_url">{children.url}</a>
      <p className="search-result_description">{children.description}</p>
      {/* <p className='search-result_emotion'>{children.emotion}</p> */}
    </li>
  );
};

searchResult.defaultProps = {
  children: {
    title: "No title was found",
    url: "This Site has no URL",
    description: "No description available",
    emotion: "No emotions detected"
  }
}

searchResult.propTypes = {
  children: PropTypes.object
}

export default searchResult;