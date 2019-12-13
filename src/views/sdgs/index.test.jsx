import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PageContainer, Sdg } from "./";

import Sdgs from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Sdgs", () => {
    it("Renders view without error", () => {
        const view = shallow(<Sdgs />);
        expect(view.find(PageContainer).length).toBe(1);
        expect(view.find("img").length).toBe(25);
        expect(view.find(Sdg).length).toBe(25);
        expect(view.find("Modal").length).toBe(8);
    });
});
