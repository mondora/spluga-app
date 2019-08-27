import React from "react";
import { StepInfo } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const onDescriptionChange = () => {};
const onNameChange = () => {};

describe("StepInfo", () => {
    it("Render component without error", () => {
        const element = shallow(<StepInfo />);

        expect(element.find("WrappedField").exists()).toBe(true);
        expect(element.find("FormattedMessage").length).toBe(2);
        expect(element.find("label").length).toBe(2);
    });

    it("Render component passing props", () => {
        const event = { target: { value: "input-test" } };
        const element = shallow(
            <StepInfo
                onNameChange={onNameChange}
                onDescriptionChange={onDescriptionChange}
                name={"test-name"}
                description={"test-description"}
            />
        );
        expect(
            element
                .find("WrappedField")
                .first()
                .props().value
        ).toBe("test-name");
        element
            .find("WrappedField")
            .first()
            .simulate("change", event);
        expect(
            element
                .find("WrappedField")
                .at(1)
                .props().value
        ).toBe("test-description");
        element
            .find("WrappedField")
            .at(1)
            .simulate("change", event);
        expect(element.find("label").length).toBe(2);
    });
});
