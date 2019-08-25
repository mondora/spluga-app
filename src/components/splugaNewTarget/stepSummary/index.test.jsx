import React from "react";
import { StepSummary } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepSummary", () => {
    it("Render component without error", () => {
        const element = shallow(<StepSummary />);
        expect(element.find("Descriptions").exists()).toBe(true);
    });

    it("Render component passing props", () => {
        const propTypes = {
            name: "test-name",
            description: "test-description",
            stakeholder: "test-stakeholder",
            goal: "test-goal",
            targetOrLimitValue: "46",
            startDate: "01-01-2018",
            endDate: "30-04-2019"
        };

        const element = shallow(<StepSummary {...propTypes} />);
        const descriptions = element.find("Descriptions");

        expect(descriptions.childAt(0).prop("children")).toBe(propTypes.name);
        expect(descriptions.childAt(1).prop("children")).toBe(propTypes.description);
        expect(descriptions.childAt(2).prop("children")).toBe(propTypes.stakeholder);
        expect(descriptions.childAt(3).prop("children")).toBe(propTypes.goal);
        expect(descriptions.childAt(4).prop("children")).toBe(propTypes.targetOrLimitValue);
        expect(descriptions.childAt(5).prop("children")).toBe(propTypes.startDate);
        expect(descriptions.childAt(6).prop("children")).toBe(propTypes.endDate);
    });
});
