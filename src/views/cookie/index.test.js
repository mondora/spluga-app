import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Cookie } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Cookie view", () => {
    it("Render view without error when proprs are empty", () => {
        const element = shallow(<Cookie />);
        expect(element.find("PolicyHeader").length).toBe(1);
        expect(element.find("FormattedMessage").length).toBe(10);
    });
});
