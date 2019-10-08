import React from "react";
import { HowDoesItWorks } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("HowDoesItWorks", () => {
    it("Render component with data", () => {
        const element = shallow(<HowDoesItWorks />);

        expect(element.find("FormattedMessage").length).toBe(5);
        expect(element.find("Icon").length).toBe(4);
    });
});
