import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Store } from "state/store";
import { fetchResults, clearResults } from "../../state/results/results-action-creators";
import { emptyString } from "../../utils/search_strings";

import SearchEngineMicro from "./search-engine_micro";

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
        <SearchEngineMicro />
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
      dispatch(fetchResults(term)); 
    };
  }
}

SearchForm.propTypes = {
  fetchResults: PropTypes.func,
  clearResults: PropTypes.func
};