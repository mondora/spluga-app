import React from "react";
import { StepSummary } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepSummary", () => {
    it("Render component without error", () => {
        const propTypes = {
            target: {
                name: "test-name",
                description: "test-description",
                stakeholder: "test-stakeholder",
                goal: "test-goal",
                value: 46,
                startDate: "01-01-2018",
                endDate: "30-04-2019"
            }
        };

        shallow(<StepSummary {...propTypes} />);
    });
});
