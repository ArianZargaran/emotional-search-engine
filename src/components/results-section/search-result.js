import React from "react";

import "styles/search-result.css";

const searchResult = ({ children }) => {
  return (
    <li className="search-result">
      <h1 className="search-result_title">{children.title}</h1>
      <a href={children.url} className="search-result_url">{children.url}</a>
      <p className="search-result_description">{children.description}</p>
    </li>
  );
};

export default searchResult;

// <p className='search-result_emotion'>{children.emotion}</p>
