import React from "react";
import { Step5 } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Step5", () => {
    it("Render component without error", () => {
        const element = shallow(<Step5 />);
        expect(element.find("PickerWrapper").exists()).toBe(true);
    });
});
