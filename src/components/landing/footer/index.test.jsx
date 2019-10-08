import React from "react";
import { Footer } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Footer", () => {
    it("Render component with data", () => {
        shallow(<Footer />);
    });
});
