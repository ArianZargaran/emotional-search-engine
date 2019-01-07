import React from "react";
import SearchEngine from "../search-engine";

it('renders SearchEngine correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchEngine />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});