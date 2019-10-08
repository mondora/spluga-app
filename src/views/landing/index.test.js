import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Landing } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Landing view", () => {
    it("Render view without error when proprs are empty", () => {
        const element = shallow(<Landing />);
        expect(element.find("NavBar").length).toBe(1);
        expect(element.find("Element").length).toBe(3);
        expect(element.find("WhatIs").length).toBe(1);
        expect(element.find("HowDoesItWorks").length).toBe(1);
    });
});
