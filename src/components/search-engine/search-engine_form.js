import React from "react";
import PropTypes from "prop-types";
import { AppConsumer } from "context";
import { emptyString } from "../../utils/search_strings";

import SearchEngineMicro from "./search-engine_micro";

import "styles/search-engine_form.css";

export default function SearchFormWrapper(props) {
  return (
    <AppConsumer>
      {context => (
        <SearchForm {...props} ctxtProps={context} />
      )}
    </AppConsumer>
  );
};

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { term } = this.state;

    return (
        <form
        onSubmit={(ev) => this.handleSubmit(ev)}
        action="#"
        className="ese-search-engine_form"
        >
          <input
            type="text"
            value={term}
            onChange={(ev) => this.onInputChange(ev)}
            className="ese-search-engine_field"
            placeholder="Search..."
            autoFocus
            />
          <SearchEngineMicro />
          <input className="ese-search-engine_submit" type="submit" value="" />
        </form>
    );
  }

  onInputChange(ev) {
    const term = ev.target.value;
    
    this.setState({
      term: term
    });
  }
  
  handleSubmit(ev) {
    const { searchQuery, clearSearchForm } = this.props.ctxtProps;
    const searchTerm = this.state.term;
    
    ev.preventDefault();

    if (!searchTerm.match(emptyString)) searchQuery(searchTerm)
    else {
      clearSearchForm();
    };
  }
}

SearchForm.propTypes = {
  searchQuery: PropTypes.func,
  clearSearchForm: PropTypes.func
};