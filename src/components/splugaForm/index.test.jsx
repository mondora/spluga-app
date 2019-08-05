import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SplugaForm from ".";
//import { Title } from "./styled";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaForm", () => {
  const fields = [
    {
      name: "appName",
      description: "App Name",
      ref: {
        required: "this is required",
        minLength: {
          value: 2,
          message: "Min length is 2"
        }
      }
    }
  ];
  const onSubmit = jest.fn();
  it("Render component without error", () => {
    shallow(
      <SplugaForm fields={fields} serverError={""} onSubmit={onSubmit} />
    );
    shallow(
      <SplugaForm
        fields={fields}
        serverError={"server error"}
        onSubmit={onSubmit}
      />
    );
  });

  /* TODO
  it("Render component with title", () => {
    const element = shallow(
      <SplugaForm title={"test-title"} fields={fields} onSubmit={onSubmit} />
    );
    console.log("element", element);
    expect(element.find(Title)).toBe(1);
  });

  */
});
