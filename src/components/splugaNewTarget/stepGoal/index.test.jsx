import React from "react";
import { StepGoal } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepGoal", () => {
    it("Render component without error", () => {
        const element = shallow(<StepGoal />);
        expect(element.find("Select").exists()).toBe(true);
        expect(element.find("Option").exists()).toBeTruthy();
        expect(element.find("label").length).toBe(1);
    });

    it("Render component passing props", () => {
        const onGoalChange = jest.fn();
        const element = shallow(<StepGoal onGoalChange={onGoalChange} goal={"test-goal"} />);

        expect(element.find("Select").props().value).toBe("test-goal");
        element.find("Select").simulate("change");
        expect(onGoalChange).toHaveBeenCalled();
    });
});