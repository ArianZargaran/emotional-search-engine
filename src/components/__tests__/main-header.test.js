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

describe('MainHeader functional component', () => {
  it('Renders MainHeader correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainHeader />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

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

  it("Title updates properly", () => {
    const component = shallow(<MainHeader>Emotional Search Egnine</MainHeader>);

    const elChildren = component.props().children;
    expect(elChildren).toBe("Emotional Search Egnine");
  });

  it("Has HeaderColorsArr[0] as its initial color", () => {
    const { component } = setup();
    const containerStyle = component.find('.ese-main-header').prop('style');
    expect(containerStyle).toEqual({color: headerColorsArr[0]});
  });

  // it("Has HeaderColorsArr[1] as its color when click", () => {
  //   const { component } = setup();

  //   component.find('.ese-main-header').simulate("mouseover");

  //   expect(component.find('.ese-main-header').prop('style')).toEqual({color: headerColorsArr[1]});
  // });
  //TODO: simulate hover effect and then check '.ese-main-header' color;
});