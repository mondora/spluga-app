import React from "react";
import { LandingJoinUs } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingJoinUs", () => {
    it("Render component with data", () => {
        const element = shallow(<LandingJoinUs />);

        expect(element.find("FormattedMessage").length).toBe(3);
        expect(element.find("WrappedField").length).toBe(1);
        expect(element.find("Button").length).toBe(1);
    });
});
