import React from "react";
import Body from "../body";
import MainHeader from "../main-header";
import SearchEngine from "../search-engine/search-engine";
import ResultsSection from "../results-section/results-section";

const setup = (extraProps) => {
  const component = shallow(<Body />)
  const props = {
    ...extraProps
  };

  return { component, props }
};

describe("Body", () => {
  it('renders Body correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Body />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it("renders right components in the right order", () => {
    const { component } = setup();
    const instanceOrder = (idx, instance) => component.find(".body-wrapper").childAt(idx).is(instance);
 
    expect(instanceOrder(0, MainHeader)).toBeTruthy();
    expect(instanceOrder(1, SearchEngine)).toBeTruthy();
    expect(instanceOrder(2, ResultsSection)).toBeTruthy();
  });
});