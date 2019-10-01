import React from "react";
import { StepStakeholder } from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const onChange = jest.fn(() => {});
var targetObject = {};

describe("StepStakeholder", () => {
    it("Render component without error", () => {
        const element = shallow(<StepStakeholder target={targetObject} />);

        expect(element.find("WrappedField").length).toBe(1);
        expect(element.find("FormattedMessage").length).toBe(1);
    });

    it("Render component and change value", () => {
        targetObject = { stakeholder: "Community" };

        const element = shallow(<StepStakeholder onChange={onChange} target={targetObject} />);
        const wrappedFields = element.find("WrappedField");
        const elementStakeholder = wrappedFields.at(0);

        expect(elementStakeholder.props().value).toBe("Community");

        elementStakeholder.prop("onChange")(null, "testEdit");

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
