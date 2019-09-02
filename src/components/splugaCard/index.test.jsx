import React from "react";
import SplugaCard from ".";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const auth = {
    currentUser: { profile: { data: { name: "name" } } }
};

console.error = jest.fn();

beforeEach(() => {
    console.error.mockClear();
});

describe("SplugaCard", () => {
    it("Render component with only required data", () => {
        const component = shallow(<SplugaCard auth={auth} />);

        expect(component.find("div").length).toBe(1);
    });

    it("Render component with data", () => {
        const company = { name: "name" };
        const component = shallow(<SplugaCard auth={auth} company={company} />);

        expect(component.find("FormattedMessage").length).toBe(2);
        expect(component.find("div").length).toBe(1);
    });

    it("Render component with prop type not in [user, company] ", () => {
        const company = { name: "name" };

        shallow(<SplugaCard auth={auth} company={company} type={""} />);
        expect(console.error).toHaveBeenCalledTimes(1);
    });
});
