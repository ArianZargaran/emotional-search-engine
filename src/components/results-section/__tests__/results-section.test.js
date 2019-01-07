import React from "react";
import ResultsSection from "../results-section";

it('renders ResultsSection correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ResultsSection />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});