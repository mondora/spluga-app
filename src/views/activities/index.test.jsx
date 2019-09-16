import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Activities } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Activities", () => {
    it("Render view without error", () => {
        shallow(<Activities />);
    });
});
