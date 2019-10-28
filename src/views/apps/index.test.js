import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Apps } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Apps view", () => {
    const propTypes = {
        company: { result: { _id: "id", apps: [{ id: "idApp" }] } },
        auth: { currentUser: {} },
        addAppStatus: {},
        addApp: jest.fn(() => {}),
        deleteApp: jest.fn(() => {}),
        enableApp: jest.fn(() => {}),
        disableApp: jest.fn(() => {})
    };

    it("Render view without error", () => {
        const view = shallow(<Apps {...propTypes} />);

        expect(view.find("Link").length).toBe(1);
        expect(view.find("FormattedMessage").length).toBe(1);
        expect(view.find("Modal").length).toBe(1);
        expect(view.find("ReduxForm").length).toBe(1);

        expect(view.find("Icon").length).toBe(1);
        expect(view.find("AppCard").length).toBe(1);

        view.find("AppCard")
            .at(0)
            .simulate("change", { action: "enable" });

        expect(propTypes.enableApp).toHaveBeenCalledTimes(1);

        view.find("AppCard")
            .at(0)
            .simulate("change", { action: "disable" });

        expect(propTypes.disableApp).toHaveBeenCalledTimes(1);

        view.find("AppCard")
            .at(0)
            .simulate("change", { action: "delete" });

        expect(propTypes.deleteApp).toHaveBeenCalledTimes(1);

        view.find("ReduxForm")
            .at(0)
            .simulate("submit", { logo: "logo" });

        expect(propTypes.addApp).toHaveBeenCalledTimes(1);

        view.find("Link")
            .at(0)
            .simulate("click");
    });

    it("Render view without error", () => {
        const view = shallow(<Apps {...propTypes} appCreated={{ app: {} }} />);

        expect(view.find("SplugaResult").length).toBe(1);
    });
});
