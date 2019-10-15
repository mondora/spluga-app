import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ActivityForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("ActivityForm", () => {
    const onSubmit = jest.fn();
    const goals = [{ key: "paperSaved", unit: "sheet" }];
    const result = [{ goal: "paperSaved", value: 10 }];
    it("Render component without error", () => {
        const component = shallow(<ActivityForm handleSubmit={onSubmit} goals={goals} result={result} />);

        expect(component.find("FormattedMessage").length).toBe(8);
        expect(component.find("WrappedField").length).toBe(4);
        expect(component.find("Button").length).toBe(1);
    });
});
