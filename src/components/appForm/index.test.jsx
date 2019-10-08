import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AppForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("AppForm", () => {
    const onSubmit = jest.fn();
    it("Render component without error", () => {
        shallow(<AppForm onSubmit={onSubmit} />);
    });
});
