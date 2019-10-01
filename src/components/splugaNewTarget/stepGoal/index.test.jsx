import React from "react";
import { StepGoal } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const onChange = jest.fn(() => {});
var targetObject = {};

describe("StepGoal", () => {
    it("Render component without error", () => {
        const element = shallow(<StepGoal target={targetObject} />);

        expect(element.find("WrappedField").exists()).toBe(true);
    });

    it("Render component and change value", () => {
        targetObject = { value: 0, goal: "test-goal" };

        const element = shallow(<StepGoal onChange={onChange} target={targetObject} />);
        const wrappedFields = element.find("WrappedField");
        const elementGoal = wrappedFields.at(0);
        const elementValue = wrappedFields.at(1);

        expect(elementGoal.props().value).toBe("test-goal");
        expect(elementValue.props().value).toBe(0);

        elementGoal.prop("onChange")(null, "test-goal2");
        elementValue.prop("onChange")(null, 6);

        expect(onChange).toHaveBeenCalledTimes(2);
    });
});
