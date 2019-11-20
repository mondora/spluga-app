import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Targets } from ".";

Enzyme.configure({ adapter: new Adapter() });

const propTypes = {
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
                    value: 100
                },
                {
                    key: 2,
                    actual: 3915,
                    description: "Target with goal co2 saved and stakeholder Community",
                    goal: "co2Saved",
                    name: "Target save CO2",
                    stakeholder: "Community",
                    value: 100
                },
                {
                    key: 3,
                    actual: 450,
                    description: "test target water save",
                    goal: "waterSaved",
                    name: "water save",
                    stakeholder: "Environment",
                    value: 1000
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
        console.log("target test", view.debug());
        expect(view.find("RadioGroup").length).toBe(1);
        expect(view.find("RadioButton").length).toBe(3);
        expect(view.find("FormattedMessage").length).toBe(4);
    });
});
