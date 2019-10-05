import React from "react";
import { CompanyTarget } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const onSubmit = jest.fn();
const targets = [{ name: "name", value: 0, actual: 0, endDate: "2029-09-09" }];
describe("CompanyTarget", () => {
    it("Render component without data", () => {
        const component = shallow(<CompanyTarget onAddTarget={onSubmit} targets={targets} />);
        expect(component.find("ReduxForm").length).toBe(1);
        expect(component.find("Modal").length).toBe(1);
        expect(component.find("Link").length).toBe(2);
        expect(component.find("FormattedMessage").length).toBe(3);

        component
            .find("Link")
            .at(0)
            .simulate("click");

        component.find("ReduxForm").simulate("submit");
        expect(onSubmit).toHaveBeenCalledTimes(1);

        component
            .find("Modal")
            .at(0)
            .simulate("cancel");
    });
});
