import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Team } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Targets view", () => {
    const propTypes = {
        auth: {},
        getPendingInvitationStatus: {}
    };

    it("Render view loading", () => {
        const view = shallow(<Team {...propTypes} />);
    });
});
