import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SdgsContainer, Description } from "./";
import Sdg from "../../components/sdg";

import Sdgs from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Sdgs", () => {
    it("Renders view without error", () => {
        const view = shallow(<Sdgs />);
        expect(view.find(SdgsContainer).length).toBe(1);
        expect(view.find(Sdg).length).toBe(17);
        expect(view.find(Description).length).toBe(1);
    });
});
