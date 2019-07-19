import React from "react";
import { NavBar } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
  it("Render compnent with data", () => {
    const element = shallow(<NavBar />);

    expect(element.find("Menu").length).toBe(1);
    expect(element.find("MenuItem").length).toBe(4);
    expect(element.find("Link").length).toBe(4);
    expect(element.find("Icon").length).toBe(4);
  });
});
