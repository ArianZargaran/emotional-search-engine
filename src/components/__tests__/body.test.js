import React from "react";
import Body from "../body";

it('renders Body correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Body />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});