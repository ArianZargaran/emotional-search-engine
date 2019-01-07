import React from "react";
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

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.changeHeaderColor = this.changeHeaderColor.bind(this);
    this.state = {
      currentColorIdx: 0
    };
  }

  render() {
    const { children } = this.props;
    
    return ( 
      <h1 
        className="ese-main-header"
        onMouseOver= {this.changeHeaderColor}
      >{children}</h1>
    );
  }

  changeHeaderColor(ev) {
    const headerEl = ev.target;
    let currentColorIdx = this.state.currentColorIdx;
    const headerColor =
      currentColorIdx === headerColorsArr.length - 1 ? 0 : currentColorIdx++;
    headerEl.style.color = headerColorsArr[headerColor];
    this.setState({
      currentColorIdx
    });
  }
}

MainHeader.propTypes = {
  children: PropTypes.string
};

MainHeader.defaultProps = {
  children: "Here goes a title"
};