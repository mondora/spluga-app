import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SidebarIcon from ".";
import { ReactComponent as Targets } from "../assets/award.svg";
import { ReactComponent as Apps } from "../assets/cloud.svg";
import { ReactComponent as Company } from "../assets/users.svg";
import { ReactComponent as SDGs } from "../assets/circle.svg";
import { ReactComponent as Activities } from "../assets/check-circle.svg";
import { ReactComponent as Profile } from "../assets/user.svg";

Enzyme.configure({ adapter: new Adapter() });

describe("When i do not pass any prop", () => {
    it("renders default icon", () => {
        const component = shallow(<SidebarIcon />);
        expect(component.find(Profile).length).toBe(1);
    });
});

describe("When i pass name prop", () => {
    it.each`
        name            | expectedResult
        ${"targets"}    | ${Targets}
        ${"apps"}       | ${Apps}
        ${"company"}    | ${Company}
        ${"sdgs"}       | ${SDGs}
        ${"activities"} | ${Activities}
    `("returns the corresponding icon", ({ name, expectedResult }) => {
        const component = shallow(<SidebarIcon name={name} />);
        expect(component.find(expectedResult).length).toBe(1);
    });
});
