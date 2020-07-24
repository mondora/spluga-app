import React from "react";
import { shallow } from "enzyme";

import { Container } from "./styled";
import EmptySquare from "./";

describe("EmptySquare", () => {
    it("provides x and y props to Container component", () => {
        const component = shallow(<EmptySquare sdg={{ color: "#f1f1f1", name: "sdg_name" }} x={10} y={15} />);
        expect(component.find(Container).prop("x")).toBe(10);
        expect(component.find(Container).prop("y")).toBe(15);
    });
});
