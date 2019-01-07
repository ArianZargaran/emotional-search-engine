import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";

import Body from "./components/body";

ReactDOM.render(
  <Provider store={store}>
    <Body />
  </Provider>,
  document.getElementById("root")
);
