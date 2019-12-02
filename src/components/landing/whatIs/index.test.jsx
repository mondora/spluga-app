import React from "react";
import { WhatIs } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("WhatIs", () => {
    it("Render component with data", () => {
        const element = shallow(<WhatIs />);
        expect(element.find("FormattedMessage").length).toBe(2);
    });
});
