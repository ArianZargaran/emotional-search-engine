import React from "react";
import SearchResult from "../search-result";

it('renders SearchResult correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchResult />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});