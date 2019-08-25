import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Companies } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Companies", () => {
    const propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } }
        },
        getCompanyStatus: {},
        company: {},
        getCompany: () => {},
        isLoading: false
    };

    it("Render view with only required data", () => {
        const view = shallow(<Companies auth={propTypes.auth} />);
        expect(view.find("Spin").length).toBe(1);
    });
});
