import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { InviteForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("InviteForm", () => {
    const onSubmit = jest.fn();
    it("Render component without error", () => {
        shallow(<InviteForm onSubmit={onSubmit} />);
    });
});
