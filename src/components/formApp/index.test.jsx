import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FormApp } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("FormApp", () => {
  const onSubmit = jest.fn();
  it("Render component without error", () => {
    shallow(<FormApp serverError={""} onSubmit={onSubmit} />);
    shallow(<FormApp serverError={"server error"} onSubmit={onSubmit} />);
  });
});
