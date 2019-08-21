import React from "react";
import { Step2 } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Step2", () => {
    it("Render component without error", () => {
        const element = shallow(<Step2 />);
        expect(element.find("Select").exists()).toBe(true);
        expect(element.find("Option").length).toBe(5);
        expect(element.find("label").length).toBe(1);
    });

    it("Render component passing props", () => {
        const handleStakeholderChange = jest.fn();
        const element = shallow(
            <Step2 onStakeholderChange={handleStakeholderChange} stakeholder={"test-stakeholder"} />
        );

        expect(element.find("Select").props().value).toBe("test-stakeholder");
        element.find("Select").simulate("change");
        expect(handleStakeholderChange).toHaveBeenCalled();
    });
});
