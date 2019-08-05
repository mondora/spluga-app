import React from "react";
import { SplugaResult } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaResul", () => {
  it("Render component without error", () => {});
  const element = shallow(<SplugaResult title="title" subtitle="sub" />);
  expect(element.find("OriginResult").length).toBe(1);
  expect(element.find("Button").length).toBe(1);
});
