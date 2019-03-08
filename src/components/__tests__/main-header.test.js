import React from 'react';
import { MainHeader } from "../main-header";
import headerColorsArr from "utils/header-colors-array";

const setup = (extraProps) => {
  const props = {
    children: "Here goes a title",
    ...extraProps
  };

  const component = shallow(<MainHeader />);

  return { props, component };
};

it('renders MainHeader correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MainHeader />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

describe('MainHeader functional component', () => {
  it('Has proper className', () => {
    const { component } = setup();
    const elClass = component.find('.ese-main-header');
    expect(elClass).toHaveLength(1);
  });

  it("Has a default Children prop", () => {
    const { component } = setup();
    const elChildren = component.props().children;
    expect(elChildren).toBe("Here goes a title");
  });

  it("Has HeaderColorsArr[0] as its initial color", () => {
    const { component } = setup();
    let containerStyle = component.find('.ese-main-header').prop('style');
    expect(containerStyle).toEqual({color: headerColorsArr[0]});
  });

  //TODO: simulate hover effect and then check '.ese-main-header' color;
});