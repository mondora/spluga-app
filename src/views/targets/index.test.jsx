import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Targets } from ".";

Enzyme.configure({ adapter: new Adapter() });

const propTypes = {
    goals: { goals: [] },
    company: {
        status: { ended: true },
        result: {
            name: "mondora srl sb",
            targets: [
                {
                    key: 1,
                    actual: 35,
                    name: "Test no print",
                    description: "Target test with goal paperSaved, stakeholder Environment",
                    stakeholder: "Environment",
                    goal: "paperSaved",
                    value: 100,
                    startDate: "2019-01-01",
                    endDate: "2019-03-01"
                },
                {
                    key: 2,
                    actual: 90,
                    description: "Target with goal co2 saved and stakeholder Community",
                    goal: "co2Saved",
                    name: "Target save CO2",
                    stakeholder: "Community",
                    value: 100,
                    startDate: "2019-01-01",
                    endDate: "2020-01-01"
                },
                {
                    key: 3,
                    actual: 450,
                    description: "test target water save",
                    goal: "waterSaved",
                    name: "water save",
                    stakeholder: "Environment",
                    value: 1000,
                    startDate: "2019-01-01",
                    endDate: "2019-03-01"
                },
                {
                    key: 4,
                    actual: 90,
                    description: "Target 4",
                    goal: "co2Saved",
                    name: "Target save CO2",
                    stakeholder: "Community",
                    value: 100,
                    startDate: "2019-01-01",
                    endDate: "2020-01-01"
                }
            ]
        },

        getCompany: jest.fn(() => {})
    }
};

describe("Targets", () => {
    it("Renders view without error", () => {
        const view = shallow(<Targets />);
        expect(view.find("div").length).toBe(1);
    });

    it("Renders view with props passed", () => {
        const view = shallow(<Targets {...propTypes} />);
        expect(view.find("RadioGroup").length).toBe(1);
        expect(view.find("RadioButton").length).toBe(3);
        expect(view.find("FormattedMessage").length).toBe(5);
    });
});
