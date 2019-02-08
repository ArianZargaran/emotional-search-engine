import React, { Component } from "react";
import searchQuery from "utils/mock-back-end-response";

const AppContext = React.createContext({
  results: null,
  searchQuery: () => null,
  clearSearchForm: () => null
});

export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      results : null,
      searchQuery: query => this.setState({ results: searchQuery(query) }),
      clearSearchForm: () => this.setState({ results: null }),
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
};
