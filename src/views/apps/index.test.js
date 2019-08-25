import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Apps } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Apps view", () => {
    const propTypes = {
        auth: {},
        addAppStatus: {}
    };

    it("Render view without error when proprs are empty", () => {
        const view = shallow(<Apps {...propTypes} />);
        expect(view.find("SplugaTable").length).toBe(1);
        expect(view.find("SplugaForm").length).toBe(1);
    });
});
