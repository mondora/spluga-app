import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Privacy } from "./";

Enzyme.configure({ adapter: new Adapter() });

describe("Privacy view", () => {
    it("Render view without error when proprs are empty", () => {
        const element = shallow(<Privacy />);
        expect(element.find("FormattedMessage").length).toBe(16);
    });
});
