import React from "react";
import { WhatIs } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
    it("Render component with data", () => {
        const element = shallow(<WhatIs />);
        expect(element.find("Icon").length).toBe(3);
        expect(element.find("FormattedMessage").length).toBe(7);
        expect(element.find("li").length).toBe(4);
    });
});
