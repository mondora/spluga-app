import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Root } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Root view", () => {
  const propTypes = {
    auth: {},
    match: { params: {} }
  };

  it("Render view without error when proprs are empty", () => {
    const element = shallow(<Root {...propTypes} />);
    expect(element.find("Header").length).toBe(1);
    expect(element.find("NavBar").length).toBe(1);
    expect(element.find("Switch").length).toBe(1);
    expect(element.find("Route").length).toBe(6);
  });
});
