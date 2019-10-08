import React from "react";
import { Thanks } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Thanks", () => {
    it("Render component with data", () => {
        const element = shallow(<Thanks />);
        expect(element.find("FormattedMessage").length).toBe(1);
    });
});
