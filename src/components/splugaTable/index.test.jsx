import React from "react";
import { SplugaTable } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaTable", () => {
  const onChange = jest.fn();
  it("Render component without data", () => {
    const element = shallow(
      <SplugaTable datasource={null} loadingStatus={true} onChange={onChange} />
    );
    expect(element.find("Table").length).toBe(0);
    expect(element.find("Spin").length).toBe(1);
  });

  it("Render component with data", () => {
    const data = [
      { _id: "5d46a6ecee79e8fd6053374a", name: "Cicle2Work", disabled: false },
      { _id: "5d46a70aa1771cc594c5d971", name: "Agyo", disabled: false }
    ];
    const element = shallow(
      <SplugaTable dataSource={data} onChange={onChange} />
    );
    expect(element.find("Table").length).toBe(1);
    expect(element.find("Spin").length).toBe(0);
  });
});
