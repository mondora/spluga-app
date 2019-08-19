import React from "react";
import { Step4 } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Step4", () => {
    it("Render component without error", () => {
        const element = shallow(<Step4 />);
        expect(element.find("Select").exists()).toBe(true);
        expect(element.find("Option").exists()).toBeTruthy();
        expect(element.find("Input").length).toBe(1);
    });

    it("Render component passing props", () => {
        const onTargetOrLimitValueChange = jest.fn();
        const onTypeChange = jest.fn();
        const event = { target: { value: 34 } };
        const element = shallow(
            <Step4
                onTargetOrLimitValueChange={onTargetOrLimitValueChange}
                onTypeChange={onTypeChange}
                targetOrLimitValue={"80"}
                type={"target"}
            />
        );

        expect(element.find("Select").props().value).toBe("target");
        element.find("Select").simulate("change");
        expect(onTypeChange).toHaveBeenCalled();
        element.find("Input").simulate("change", event);
        expect(onTargetOrLimitValueChange).toHaveBeenCalled();
    });
});
