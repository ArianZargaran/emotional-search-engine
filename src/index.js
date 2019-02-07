import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./context";

import Body from "./components/body";

ReactDOM.render(
  <AppProvider>
    <Body />
  </AppProvider>,
  document.getElementById("root")
);
