import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AppForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyForm", () => {
    const onSubmit = jest.fn();
    const onSelect = jest.fn();
    it("Render component without error", () => {
        const component = shallow(<AppForm handleSubmit={onSubmit} onSelectFile={onSelect} />);

        expect(component.find("FormattedMessage").length).toBe(2);
        expect(component.find("WrappedField").length).toBe(1);
        expect(component.find("Upload").length).toBe(1);
        expect(component.find("Button").length).toBe(2);
        expect(component.find("Icon").length).toBe(1);
        component
            .find("Upload")
            .at(0)
            .simulate("remove");
    });
});
