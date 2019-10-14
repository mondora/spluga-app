import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ActivityResult } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("ActivityResult", () => {
    const propTypes = {
        goals: [{ key: "paperSaved", unit: "sheet" }, { key: "waterSaved", unit: "l" }],
        activities: [{ date: "2019-10-01", goal: "paperSaved", value: 1 }]
    };
    it("Render component without data", () => {
        const component = shallow(<ActivityResult />);
        expect(component.find("Spin").length).toBe(1);
    });

    it("Render component with data", () => {
        const component = shallow(<ActivityResult {...propTypes} />);

        expect(component.find("FormattedMessage").length).toBe(1);
        expect(component.find("Select").length).toBe(1);
        expect(component.find("ResponsiveContainer").length).toBe(1);
        expect(component.find("LineChart").length).toBe(1);

        component.find("Select").simulate("change", "waterSaved");
    });
});
