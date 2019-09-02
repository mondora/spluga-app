import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Companies } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Companies", () => {
    var propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } }
        },
        company: { status: {} },
        companyCreated: { status: {} },
        getCompany: jest.fn(() => {}),
        addCompany: jest.fn(() => {}),
        addInvitation: jest.fn(() => {})
    };

    it("Render view without company", () => {
        const view = shallow(<Companies {...propTypes} />);

        expect(view.find("ReduxForm").length).toBe(1);

        view.find("ReduxForm").simulate("submit", { preventDefault: () => {} });
        view.find("ReduxForm").simulate("selectFile", { preventDefault: () => {} });
        expect(propTypes.addCompany).toHaveBeenCalledTimes(1);
    });

    it("Render view in loading mode", () => {
        propTypes.company.status = { started: true };
        const view = shallow(<Companies {...propTypes} />);

        expect(view.find("Spin").length).toBe(1);
    });

    it("Render view company data", () => {
        propTypes.company.status = { started: false };
        propTypes.company.result = {};
        const view = shallow(<Companies {...propTypes} />);

        expect(view.find("SplugaCard").length).toBe(1);
        expect(view.find("CompanyTeam").length).toBe(1);

        view.find("CompanyTeam").simulate("invite", { preventDefault: () => {} });
        expect(propTypes.addInvitation).toHaveBeenCalledTimes(1);
    });
});
