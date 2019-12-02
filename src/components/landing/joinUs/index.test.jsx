import React from "react";
import { JoinUs } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("JoinUs", () => {
    it("Render component with data", () => {
        const element = shallow(<JoinUs />);

        expect(element.find("FormattedMessage").length).toBe(2);
    });
});
