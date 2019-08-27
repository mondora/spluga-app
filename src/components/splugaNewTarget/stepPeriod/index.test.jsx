import React from "react";
import { StepPeriod } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepPeriod", () => {
    it("Render component without error", () => {
        const element = shallow(<StepPeriod />);
        expect(element.find("WrappedField").exists()).toBe(true);
        expect(element.find("FormattedMessage").exists()).toBe(true);
    });
});
