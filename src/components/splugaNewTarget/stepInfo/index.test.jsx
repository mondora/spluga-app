import React from "react";
import { StepInfo } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const onChange = jest.fn(() => {});
var targetObject = {};

describe("StepInfo", () => {
    it("Render component without error", () => {
        const element = shallow(<StepInfo target={targetObject} />);

        expect(element.find("WrappedField").length).toBe(2);
        expect(element.find("FormattedMessage").length).toBe(3);
    });

    it("Render component and change value", () => {
        targetObject = { name: "test-name", description: "test-description" };

        const element = shallow(<StepInfo onChange={onChange} target={targetObject} />);
        const wrappedFields = element.find("WrappedField");
        const elementName = wrappedFields.at(0);
        const elementDescription = wrappedFields.at(1);

        expect(elementName.props().value).toBe("test-name");
        expect(elementDescription.props().value).toBe("test-description");

        elementName.prop("onChange")(null, "testEdit");
        elementDescription.prop("onChange")(null, "testEdit");

        expect(onChange).toHaveBeenCalledTimes(2);
    });
});
