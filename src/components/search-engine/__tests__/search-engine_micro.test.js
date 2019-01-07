import React from "react";
import SearchEngineMicro from "../search-engine_micro";

it('renders SearchEngineMicro correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchEngineMicro />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});