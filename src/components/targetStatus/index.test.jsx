import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TargetStatus } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyTeam", () => {
    const target = { name: "name", value: 0, actual: 0, endDate: "2019-09-09" };
    it("Render component without error", () => {
        const component = shallow(<TargetStatus target={target} />);

        expect(component.find("Avatar").length).toBe(1);
    });
});
