import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Activities } from ".";

Enzyme.configure({ adapter: new Adapter() });
const propTypes = {
    auth: {},
    goal: { key: "key" },
    goals: [{ key: "key" }],
    addActivity: jest.fn(() => {})
};

describe("Activities", () => {
    it("Render view without error", () => {
        const view = shallow(<Activities {...propTypes} />);

        expect(view.find("ReduxForm").length).toBe(1);

        view.find("ReduxForm").simulate("submit");
        expect(propTypes.addActivity).toHaveBeenCalledTimes(1);
    });
});
