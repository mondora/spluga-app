import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Home } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
    const propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } }
        },
        getCompanyStatus: {},
        company: {},
        getCompany: () => {}
    };

    it("Render component with only required data", () => {
        const element = shallow(<Home auth={propTypes.auth} />);
        expect(element.find("Spin").length).toBe(1);
    });

    it("Render component with all props not defined", () => {
        const element = shallow(<Home {...propTypes} />);
        expect(element.find("Spin").length).toBe(1);
    });
});
