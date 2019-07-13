import React from 'react';
import { MainHeader } from "../main-header";

it('renders MainHeader correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MainHeader />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
