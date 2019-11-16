import React from "react";
import { StepIntro } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepIntro", () => {
    it("Render component without error", () => {
        shallow(<StepIntro />);
    });
});
