import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Apps } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Apps view", () => {
    var propTypes = {
        auth: {},
        addAppStatus: {},
        addApp: jest.fn(() => {}),
        deleteApp: jest.fn(() => {}),
        enableApp: jest.fn(() => {}),
        disableApp: jest.fn(() => {})
    };

    it("Render view without error", () => {
        const view = shallow(<Apps {...propTypes} />);

        expect(view.find("SplugaTable").length).toBe(1);
        expect(view.find("SplugaForm").length).toBe(1);
    });

    it("Render view without error and create app", () => {
        const view = shallow(<Apps {...propTypes} />);

        view.find("SplugaForm").simulate("submit", { preventDefault: () => {} });
        expect(propTypes.addApp).toHaveBeenCalledTimes(1);
    });

    it("Render view without error and delete app", () => {
        const data = { id: "id", action: "delete" };
        const view = shallow(<Apps {...propTypes} />);

        view.find("SplugaTable").simulate("change", data);
        expect(propTypes.deleteApp).toHaveBeenCalledTimes(1);
    });

    it("Render view without error and enable app", () => {
        const data = { id: "id", action: "enable" };
        const view = shallow(<Apps {...propTypes} />);

        view.find("SplugaTable").simulate("change", data);
        expect(propTypes.enableApp).toHaveBeenCalledTimes(1);
    });

    it("Render view without error and disable app", () => {
        const data = { id: "id", action: "disable" };
        const view = shallow(<Apps {...propTypes} />);

        view.find("SplugaTable").simulate("change", data);
        expect(propTypes.disableApp).toHaveBeenCalledTimes(1);
    });

    it("Render view with new appInfo", () => {
        propTypes.app = { name: "app" };
        const view = shallow(<Apps {...propTypes} />);

        expect(view.find("SplugaResult").length).toBe(1);
    });

    it("Render view with server error", () => {
        propTypes.app = null;
        propTypes.addAppStatus.error = true;
        propTypes.addAppStatus.errorInfo = "error";
        const view = shallow(<Apps {...propTypes} />);

        expect(view.find("SplugaTable").length).toBe(1);
        expect(view.find("SplugaForm").length).toBe(1);
    });
});
