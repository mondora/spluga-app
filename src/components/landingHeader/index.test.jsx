import React from "react";
import { LandingHeader } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingHeader", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingHeader />);

        expect(element.find("FormattedHTMLMessage").length).toBe(1);
        expect(element.find("FormattedMessage").length).toBe(1);
    });
});
