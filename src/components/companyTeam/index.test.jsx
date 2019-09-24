import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CompanyTeam } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyTeam", () => {
    const team = [{ id: "userId", name: "User Name", picture: "pic" }];
    const onSubmit = jest.fn();

    it("Render component without data", () => {
        const component = shallow(<CompanyTeam onInvite={onSubmit} />);

        expect(component.find("Fragment").length).toBe(1);
        expect(component.find("Button").length).toBe(1);
        expect(component.find("Modal").length).toBe(1);
        expect(component.find("FormattedMessage").length).toBe(2);
    });

    it("Render component with data", () => {
        const component = shallow(<CompanyTeam team={team} onInvite={onSubmit} />);

        expect(component.find("Fragment").length).toBe(1);
        expect(component.find("Button").length).toBe(1);
        expect(component.find("Modal").length).toBe(1);
        expect(component.find("UserTeam").length).toBe(1);
        expect(component.find("ReduxForm").length).toBe(1);
        expect(component.find("FormattedMessage").length).toBe(2);

        component.find("ReduxForm").simulate("submit");
        expect(onSubmit).toHaveBeenCalledTimes(1);

        component.find("Button").simulate("click");
    });
});
