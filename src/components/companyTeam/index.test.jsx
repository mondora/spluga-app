import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CompanyTeam } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyTeam", () => {
    it("Render component without error", () => {
        const component = shallow(<CompanyTeam />);

        expect(component.find("Fragment").length).toBe(1);
        expect(component.find("FormattedMessage").length).toBe(2);
    });
});
