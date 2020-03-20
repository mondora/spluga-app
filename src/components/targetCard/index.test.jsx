import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TargetCard } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaCard", () => {
    it("Renders component", () => {
        const component = shallow(<TargetCard />);
        expect(component.find("Progress").exists).toBeTruthy();
        expect(component.find("div").exists).toBeTruthy();
    });

    it("Render component with prop", () => {
        const target = { name: "name", description: "description", acutal: 2, value: 100, startDate: 0, endDate: 0 };
        shallow(<TargetCard target={target} />); // TODO ?
    });
});
