import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Team } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Targets view", () => {
    var propTypes = {
        auth: {},
        acceptInvitationStatus: { started: true }
    };

    it("Render view loading", () => {
        const view = shallow(<Team {...propTypes} />);
        expect(view.find("Spin").length).toBe(1);
    });

    it("Render view Alert", () => {
        propTypes.acceptInvitationStatus = { started: false, ended: false, error: true };
        const view = shallow(<Team {...propTypes} />);
        expect(view.find("Alert").length).toBe(1);
    });

    it("Render view Redirect", () => {
        propTypes.acceptInvitationStatus = { started: false, ended: true, error: false };
        const view = shallow(<Team {...propTypes} />);
        expect(view.find("Redirect").length).toBe(1);
    });

    it("Render view no status", () => {
        propTypes.acceptInvitationStatus = null;
        const view = shallow(<Team {...propTypes} />);
        expect(view.find("Spin").length).toBe(1);
    });
});
