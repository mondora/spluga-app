import React from "react";
import ValueYourBusiness from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ValueYourBusiness", () => {
    it("Render component with data", () => {
        const element = shallow(<ValueYourBusiness />);
        expect(element.find("Icon").length).toBe(3);
        expect(element.find("FormattedMessage").length).toBe(5);
        expect(element.find("li").length).toBe(4);
    });
});
