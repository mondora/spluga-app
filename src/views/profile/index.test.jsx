import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ActivityResult } from "../../components/activityResult";
import SplugaCard from "../../components/splugaCard";
import { SplugaTips } from "../../components/splugaTips";
import SDGImpactChart from "../../components/sdgImpactChart";

import { Profile } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Profile", () => {
    var propTypes = {
        auth: {
            currentUser: { profile: { data: { name: "name" } } },
        },
        getCompanyStatus: {},
        company: {},
        user: { status: {} },
        target: {},
        getCompany: () => {},
        addUser: () => {},
    };

    it("Render view with all props not defined", () => {
        const view = shallow(<Profile {...propTypes} />);
        expect(view.find("Spin").length).toBe(1);
    });

    it("Render view with no user", () => {
        propTypes.company = { status: { started: false } };
        propTypes.user = { status: { started: true } };
        const view = shallow(<Profile {...propTypes} />);

        expect(view.find(SplugaCard).length).toBe(1);
        expect(view.find(SDGImpactChart).length).toBe(1);
        expect(view.find(ActivityResult).length).toBe(1);
        expect(view.find(SplugaTips).length).toBe(1);
    });
});
