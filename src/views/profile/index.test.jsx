import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Profile } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Profile", () => {
    const propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } }
        },
        getCompanyStatus: {},
        company: {},
        getCompany: () => {}
    };

    it("Render view with only required data", () => {
        const view = shallow(<Profile auth={propTypes.auth} />);
        expect(view.find("Spin").length).toBe(1);
    });

    it("Render view with all props not defined", () => {
        const view = shallow(<Profile {...propTypes} />);
        expect(view.find("Spin").length).toBe(1);
    });
});
