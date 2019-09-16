import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { UserTeam } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyTeam", () => {
    const user = { name: "name", picture: "picture" };
    it("Render component without error", () => {
        const component = shallow(<UserTeam user={user} />);

        expect(component.find("Avatar").length).toBe(1);
    });
});
