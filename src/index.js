import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "state/store";

import Body from "./components/body";

ReactDOM.render(
  <Provider>
    <Body />
  </Provider>,
  document.getElementById("root")
);
