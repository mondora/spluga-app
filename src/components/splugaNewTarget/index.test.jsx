import React from "react";
import { SplugaNewTarget } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaNewTarget", () => {
    it("Render component without error", () => {
        const element = shallow(<SplugaNewTarget />);
        expect(element.find("Step").exists()).toBe(true);
        expect(element.find("Button").length).toBe(1);
    });

    it("Render component with previous button", () => {
        const element = shallow(<SplugaNewTarget />);
        expect(element.find("StepInfo").exists()).toBe(true);
        expect(element.find("Button").length).toBe(1);
        element.find("Button").simulate("click");
        expect(element.find("Button").length).toBe(2);

        expect(element.find("StepStakeholder").exists()).toBe(true);
        element
            .find("Button")
            .at(1)
            .simulate("click");
        expect(element.find("StepInfo").exists()).toBe(true);
    });

    it("Render component with reject button", () => {
        const element = shallow(<SplugaNewTarget />);
        expect(element.find("StepInfo").exists()).toBe(true);
        expect(element.find("Button").length).toBe(1);
        element.find("Button").simulate("click");
        expect(element.find("Button").length).toBe(2);
        for (let i = 0; i < 4; i++) {
            element
                .find("Button")
                .at(0)
                .simulate("click");
        }
        expect(element.find("Button").length).toBe(3);
        expect(element.find("Steps").props().current).toEqual(5);
        element
            .find("Button")
            .at(1)
            .simulate("click");
        expect(element.find("Steps").props().current).toEqual(0);
        expect(element.find("Button").length).toBe(1);
    });

    it("Render component with done button", () => {
        const element = shallow(<SplugaNewTarget />);
        expect(element.find("StepInfo").exists()).toBe(true);
        expect(element.find("Button").length).toBe(1);
        element.find("Button").simulate("click");
        expect(element.find("Button").length).toBe(2);
        for (let i = 0; i < 4; i++) {
            element
                .find("Button")
                .at(0)
                .simulate("click");
        }
        expect(element.find("Button").length).toBe(3);

        element
            .find("Button")
            .at(0)
            .simulate("click");
    });
});
