import React from "react";
import { StepType } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepType", () => {
    it("Render component without error", () => {
        const element = shallow(<StepType />);

        expect(element.find("WrappedField").exists()).toBe(true);
        expect(element.find("FormattedMessage").exists()).toBeTruthy();
    });

    /*
    it("Render component passing props", () => {
        const onValueChange = jest.fn();
        const onTypeChange = jest.fn();
        const event = 34;
        const element = shallow(
            <StepType onValueChange={onValueChange} onTypeChange={onTypeChange} value={"80"} type={"target"} />
        );

        expect(element.find("WrappedField").props().value).toBe("target");
        element.find("WrappedField").simulate("change");
        expect(onTypeChange).toHaveBeenCalled();
        element.find("WrappedField").simulate("change", event);
        expect(onValueChange).toHaveBeenCalled();
    });

    */
});
