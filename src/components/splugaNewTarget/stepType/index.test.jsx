import React from "react";
import { StepType } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepType", () => {
    it("Render component without error", () => {
        const element = shallow(<StepType />);
        expect(element.find("Select").exists()).toBe(true);
        expect(element.find("Option").exists()).toBeTruthy();
        expect(element.find("InputNumber").length).toBe(1);
    });

    it("Render component passing props", () => {
        const onTargetOrLimitValueChange = jest.fn();
        const onTypeChange = jest.fn();
        const event = 34;
        const element = shallow(
            <StepType
                onTargetOrLimitValueChange={onTargetOrLimitValueChange}
                onTypeChange={onTypeChange}
                targetOrLimitValue={"80"}
                type={"target"}
            />
        );

        expect(element.find("Select").props().value).toBe("target");
        element.find("Select").simulate("change");
        expect(onTypeChange).toHaveBeenCalled();
        element.find("InputNumber").simulate("change", event);
        expect(onTargetOrLimitValueChange).toHaveBeenCalled();
    });
});
