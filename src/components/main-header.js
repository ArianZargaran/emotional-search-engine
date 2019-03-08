import React, { useState } from "react";
import PropTypes from "prop-types";
import headerColorsArr from "utils/header-colors-array";

import "styles/main-header.css";

export function MainHeader({ children }) {    
  const [ colorIdx , setColorIdx ] = useState(0);
  const [ headerColor , setHeaderColor ] = useState(headerColorsArr[0]);

  const changeHeaderColor = () => {    
    setColorIdx(currentColorIdx => {
      return currentColorIdx === headerColorsArr.length - 1 ? 0 : currentColorIdx + 1
    });
    setHeaderColor(headerColorsArr[colorIdx]);
  };

  return ( 
    <h1
      style={{"color": headerColor}}
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

export default React.memo(MainHeader);