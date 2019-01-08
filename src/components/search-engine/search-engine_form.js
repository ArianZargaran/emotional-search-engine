import React from "react";
import { connect } from "react-redux";
import {
  searchQuery,
  clearSearchForm
} from "state/results/action-creators";
import { emptyString } from "../../utils/search_strings";

import SearchEngineMicro from "./search-engine_micro";

import "styles/search-engine_form.css";

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
        onSubmit={this.handleSubmit}
        action="#"
        className="ese-search-engine_form"
      >
        <input
          type="text"
          value={term}
          onChange={this.onInputChange}
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
    const { clearSearchForm } = this.props;

    if (!term) {
      clearSearchForm();
    }

    this.setState({
      term: term
    });
  }

  handleSubmit(ev) {
    const { searchQuery } = this.props;
    const searchTerm = this.state.term;

    ev.preventDefault();

    if (!searchTerm.match(emptyString)) searchQuery(searchTerm);
  }
}

const mapStateToProps = state => {
  return {
    query: state.query
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    searchQuery: state => dispatch(searchQuery(state)),
    clearSearchForm: state => dispatch(clearSearchForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
