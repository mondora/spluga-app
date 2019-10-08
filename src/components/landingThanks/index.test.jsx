import React from "react";
import { LandingThanks } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingThanks", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingThanks />);
        expect(element.find("FormattedMessage").length).toBe(1);
    });
});
