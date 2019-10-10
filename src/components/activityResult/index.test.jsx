import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ActivityResult } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("ActivityResult", () => {
    const team = [{ id: "userId", name: "User Name", picture: "pic" }];
    const onSubmit = jest.fn();

    it("Render component without data", () => {
        const component = shallow(<ActivityResult onInvite={onSubmit} />);

        expect(component.find("FormattedMessage").length).toBe(1);
    });
});
