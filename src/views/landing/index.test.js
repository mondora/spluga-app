import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Landing } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Landing view", () => {
    it("Render view without error when proprs are empty", () => {
        const element = shallow(<Landing />);
        expect(element.find("LandingNav").length).toBe(1);
        expect(element.find("Element").length).toBe(2);
        expect(element.find("LandingWhatIs").length).toBe(1);
        expect(element.find("LandingHowDoesItWorks").length).toBe(1);
    });
});
