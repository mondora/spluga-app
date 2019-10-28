import React from "react";
import AppCard from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const onChange = jest.fn();

console.error = jest.fn();

beforeEach(() => {
    console.error.mockClear();
});

describe("AppCard", () => {
    it("Render component with data and no logo", () => {
        const app = { id: "id" };

        const component = shallow(<AppCard app={app} onChange={onChange} />);

        expect(component.find("Switch").length).toBe(1);
        expect(component.find("Button").length).toBe(1);
        expect(component.find("FormattedMessage").length).toBe(1);

        component
            .find("Button")
            .at(0)
            .simulate("click");

        component
            .find("Switch")
            .at(0)
            .simulate("change");

        component
            .find("Switch")
            .at(0)
            .simulate("change");

        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it("Render component with data and  logo", () => {
        const app = { id: "id", logo: "logo" };

        shallow(<AppCard app={app} />);
    });
});
