import React from "react";
import { StepStakeholder } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("StepStakeholder", () => {
    it("Render component without error", () => {
        const element = shallow(<StepStakeholder />);
        expect(element.find("WrappedField").exists()).toBe(true);
        expect(element.find("label").length).toBe(1);
    });
    /*
    it("Render component passing props", () => {
        const handleStakeholderChange = jest.fn();
        const element = shallow(
            <StepStakeholder onStakeholderChange={handleStakeholderChange} stakeholder={"test-stakeholder"} />
        );

        expect(element.find("WrappedField").props().value).toBe("test-stakeholder");
        element.find("WrappedField").simulate("change");
        expect(handleStakeholderChange).toHaveBeenCalled();
    });

    */
});
