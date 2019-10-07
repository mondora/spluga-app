import React from "react";
import { LandingNav } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingNav", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingNav />);
        expect(element.find("FormattedMessage").length).toBe(5);
    });
});
