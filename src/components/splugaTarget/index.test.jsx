import React from "react";
import { SplugaTarget } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaTarget", () => {
    it("Render component without error", () => {
        const element = shallow(<SplugaTarget />);
        expect(element.find("SplugaNewTarget").exists()).toBe(true);
        expect(element.find("Modal").exists()).toBe(true);
        expect(element.find("Button").length).toBe(2);
        expect(element.find("FormattedMessage").length).toBe(2);
    });
});
