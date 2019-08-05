import React from "react";
import FormCompany from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("formCompany", () => {
  it("Render component with data", () => {
    const addCompany = () => {};
    const auth = {
      ownerId: "5d307d2f9e861a411ba585ef"
    };

    const element = shallow(
      <FormCompany auth={auth} addCompany={addCompany} />
    );
    expect(element.find("input").length).toBe(1);
    expect(element.find("label").length).toBe(1);
  });
});
