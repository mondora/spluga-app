import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AppsForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("AppsForm", () => {
    const onSubmit = jest.fn();
    it("Render component without error", () => {
        shallow(<AppsForm onSubmit={onSubmit} />);
    });
});
