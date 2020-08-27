import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideBar, { SideBarItem } from ".";

import { Link } from "react-router-dom";
import { Icon, SideBarContainer, Label, ItemContainer } from "./styled";
import { PROFILE } from "../../constants/routes";
import { FormattedMessage } from "react-intl";

Enzyme.configure({ adapter: new Adapter() });

describe("SideBarItem", () => {
    it("renders a SidebarItem ", () => {
        const component = shallow(<SideBarItem currentPage="/" name="" labelId="c-navbar.profile" urlLink={PROFILE} />);
        expect(component.find(Icon).length).toBe(1);
        expect(component.find(ItemContainer).length).toBe(1);
        expect(component.find(Label).length).toBe(1);
        expect(component.find(FormattedMessage).length).toBe(1);
    });
});

describe("SideBar", () => {
    const component = shallow(<SideBar />);
    expect(component.find(SideBarContainer).length).toBe(1);
    expect(component.find(SideBarItem).length).toBe(6);
    expect(component.find(Link).length).toBe(6);
});
