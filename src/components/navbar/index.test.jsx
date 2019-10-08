import React from "react";
import { NavBar } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NavBar", () => {
    it("Render component with data", () => {
        const element = shallow(<NavBar />);

        expect(element.find("Menu").length).toBe(1);
        expect(element.find("MenuItem").length).toBe(5);
        expect(element.find("Link").length).toBe(5);
        expect(element.find("Icon").length).toBe(5);
    });
});
