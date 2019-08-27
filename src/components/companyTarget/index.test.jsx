import React from "react";
import { CompanyTarget } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyTarget", () => {
    it("Render component without error", () => {
        const element = shallow(<CompanyTarget />);
        expect(element.find("SplugaNewTarget").exists()).toBe(false);
        expect(element.find("Modal").exists()).toBe(true);
        expect(element.find("Button").length).toBe(1);
        expect(element.find("FormattedMessage").length).toBe(2);
    });
});
