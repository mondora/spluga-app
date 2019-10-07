import React from "react";
import { LandingWhatIs } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingWhatIs />);
        expect(element.find("FormattedMessage").length).toBe(10);
        expect(element.find("li").length).toBe(6);
    });
});
