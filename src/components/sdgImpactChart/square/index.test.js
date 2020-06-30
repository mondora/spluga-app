import React from "react";
import { mount, shallow } from "enzyme";

import { Container, ColoredSquare, Tooltip } from "./styled";
import Square from "./";

describe("Square", () => {
    it("sets Tooltip not visible by default", () => {
        const component = shallow(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={0} y={0} />);
        expect(component.find(Tooltip).prop("isVisible")).toBe(false);
    });

    it("sets Tooltip visible when the pointer is over the square", () => {
        const component = mount(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={0} y={0} />);
        component.find(Container).simulate("mouseOver");
        expect(component.find(Tooltip).prop("isVisible")).toBe(true);
    });

    it("sets Tooltip not visible when the pointer leaves the square", () => {
        const component = mount(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={0} y={0} />);
        component.find(Container).simulate("mouseOver");
        expect(component.find(Tooltip).prop("isVisible")).toBe(true);
        component.find(Container).simulate("mouseLeave");
        expect(component.find(Tooltip).prop("isVisible")).toBe(false);
    });

    it("provides x and y props to Container component", () => {
        const component = shallow(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={10} y={15} />);
        expect(component.find(Container).prop("x")).toBe(10);
        expect(component.find(Container).prop("y")).toBe(15);
    });

    it("provides sdg.color prop to ColoredSquare component", () => {
        const component = shallow(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={10} y={15} />);
        expect(component.find(ColoredSquare).prop("color")).toBe("#f1f1f1");
    });

    it("sets sdg.name prop as child of Tooltip component", () => {
        const component = shallow(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={10} y={15} />);
        expect(component.find(Tooltip).text()).toBe("sdg_name");
    });

    it("sets ColoredSquare rotation as a random number", () => {
        const component = shallow(<Square sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={10} y={15} />);
        expect(component.find(ColoredSquare).props("rotation")).not.toBe(undefined);
    });
});
