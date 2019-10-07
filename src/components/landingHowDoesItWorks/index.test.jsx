import React from "react";
import { LandingHowDoesItWorks } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingHowDoesItWorks", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingHowDoesItWorks />);

        expect(element.find("FormattedMessage").length).toBe(5);
        expect(element.find("Icon").length).toBe(4);
    });
});
