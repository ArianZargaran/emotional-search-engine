import React, { useState } from "react";
import PropTypes from "prop-types";

import "styles/main-header.css";

const headerColorsArr = [ 
  "#4688F1",
  "#E7453C",
  "#F9BB2D",
  "#4688F1",
  "#3AA757",
  "#E7453C"
];

export default function MainHeader({ children }) {    
  const [ colorIdx , setColorIdx ] = useState(0);

  function changeHeaderColor(ev) {
    const headerEl = ev.target;
    
    setColorIdx(currentColorIdx => currentColorIdx === headerColorsArr.length - 1 ? 0 : currentColorIdx + 1);
    headerEl.style.color = headerColorsArr[colorIdx];
  };

  return ( 
    <h1 
      className="ese-main-header"
      onMouseOver={changeHeaderColor}
    >
      {children}
    </h1>
  );
};

MainHeader.propTypes = {
  children: PropTypes.string
};

MainHeader.defaultProps = {
  children: "Here goes a title"
};