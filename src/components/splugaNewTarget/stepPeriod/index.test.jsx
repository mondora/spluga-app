import React from "react";
import { StepPeriod } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const onChange = () => {};
var target = {};
describe("StepPeriod", () => {
    it("Render component without error", () => {
        const element = shallow(<StepPeriod onChange={onChange} target={target} />);
        expect(element.find("WrappedField").exists()).toBe(true);
        expect(element.find("FormattedMessage").exists()).toBe(true);
    });

    it("Render component and change value", () => {
        const event = { target: { value: "2019-10-04" } };
        target = { startDate: "2019-10-01", endDate: "2019-10-02" };
        const element = shallow(<StepPeriod onChange={onChange} target={target} />);

        expect(
            element
                .find("WrappedField")
                .at(0)
                .props().value
        ).toBe("2019-10-01");
        element
            .find("WrappedField")
            .at(0)
            .simulate("change", event);
        expect(
            element
                .find("WrappedField")
                .at(0)
                .props().value
        ).toBe("2019-10-01");

        expect(
            element
                .find("WrappedField")
                .at(1)
                .props().value
        ).toBe("2019-10-02");

        element
            .find("WrappedField")
            .at(1)
            .simulate("change", event);
    });
});
