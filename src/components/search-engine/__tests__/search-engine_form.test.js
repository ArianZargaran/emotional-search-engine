import React from "react";
import SearchEngineForm from "../search-engine_form";

it('renders SearchEngineForm correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchEngineForm />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});