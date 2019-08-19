import React from "react";
import { Step6 } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Step6", () => {
    it("Render component without error", () => {
        const element = shallow(<Step6 />);
        console.log("step6", element.debug());
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

        const element = shallow(<Step6 {...propTypes} />);

        expect(
            element
                .find("Descriptions")
                .childAt(0)
                .props().children[1]
        ).toBe(propTypes.name);

        expect(
            element
                .find("Descriptions")
                .childAt(1)
                .props().children[1]
        ).toBe("test-description");

        expect(
            element
                .find("Descriptions")
                .childAt(2)
                .props().children[1]
        ).toBe("test-stakeholder");

        expect(
            element
                .find("Descriptions")
                .childAt(3)
                .props().children[1]
        ).toBe("test-goal");

        expect(
            element
                .find("Descriptions")
                .childAt(4)
                .props().children[1]
        ).toBe("46");

        expect(
            element
                .find("Descriptions")
                .childAt(5)
                .props().children[1]
        ).toBe("01-01-2018");

        expect(
            element
                .find("Descriptions")
                .childAt(6)
                .props().children[0]
        ).toBe("30-04-2019");
    });
});
