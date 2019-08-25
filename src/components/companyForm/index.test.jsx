import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CompanyForm from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("SplugaForm", () => {
    const fields = [
        {
            name: "appName",
            description: "App Name",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        }
    ];
    const onSubmit = jest.fn();
    const onSelect = jest.fn();
    it("Render component without error", () => {
        shallow(<CompanyForm onSubmit={onSubmit} onSelectFile={onSelect} />);
    });
});
