import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { TargetCard } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaCard", () => {
    it("Renders component", () => {
        const component = shallow(<TargetCard />);

        console.log("sjhaksj", component.debug());

        expect(component.find("Progress").exists).toBeTruthy();
        expect(component.find("div").exists).toBeTruthy();
    });

    it("Render component with prop", () => {
        const target = { name: "name", description: "description", acutal: 2, value: 100 };
        const component = mount(<TargetCard target={target} />);
        console.log("sjhaksj", component.debug());
        expect(component.prop("target")).toEqual(target);
    });
});
