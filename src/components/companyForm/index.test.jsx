import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CompanyForm } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("CompanyForm", () => {
    const onSubmit = jest.fn();
    const onSelect = jest.fn();
    it("Render component without error", () => {
        shallow(<CompanyForm handleSubmit={onSubmit} onSelectFile={onSelect} />);
    });
});
