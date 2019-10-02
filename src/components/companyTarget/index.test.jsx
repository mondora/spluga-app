import React from "react";
import { CompanyTarget } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const onSubmit = jest.fn();
describe("CompanyTarget", () => {
    it("Render component without data", () => {
        const component = shallow(<CompanyTarget onAddTarget={onSubmit} />);
        expect(component.find("ReduxForm").length).toBe(1);
        expect(component.find("Modal").exists()).toBe(true);
        expect(component.find("Button").length).toBe(1);
        expect(component.find("FormattedMessage").length).toBe(2);

        component.find("Button").simulate("click");

        component.find("ReduxForm").simulate("submit");
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});
