import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SplugaTips } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaTips", () => {
    it("Renders component", () => {
        const component = shallow(<SplugaTips />);

        expect(component.find("FormattedMessage").length).toBe(6);
        expect(component.find("Col").exists).toBeTruthy();
        expect(component.find("Row").exists).toBeTruthy();
    });

    it("Render component with prop", () => {
        const component = shallow(<SplugaTips isCompany={true} />);

        expect(
            component
                .find("FormattedMessage")
                .first()
                .props().id
        ).toEqual("c-splugaTips.title.company");
    });
});
