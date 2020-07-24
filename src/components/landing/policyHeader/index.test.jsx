import React from "react";
import { PolicyHeader } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("PolicyHeader", () => {
    it("Render component with data", () => {
        const element = shallow(<PolicyHeader />);

        expect(element.find("FormattedMessage").length).toBe(1);
    });
});
