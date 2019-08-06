import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Targets } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Targets view", () => {
  const propTypes = {
    auth: {}
  };

  it("Render view without error when proprs are empty", () => {
    const element = shallow(<Targets {...propTypes} />);
    expect(element.find("SplugaTable").length).toBe(1);
    expect(element.find("SplugaForm").length).toBe(1);
  });
});
