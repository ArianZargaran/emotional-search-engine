import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "state/store";

import Body from "./components/body";

const render = () => {
  ReactDOM.render(
    <Provider>
      <Body />
    </Provider>,
    document.getElementById("root")
  );
};

window.onload = () => {
  //Avoids FUOC - "flash of unstyled content"
	render();
};