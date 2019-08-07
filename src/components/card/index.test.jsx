import React from "react";
import Card from ".";
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

describe("Card", () => {
    it("Render component with only required data", () => {
        const element = shallow(<Card auth={auth} />);
        expect(element.find("div").length).toBe(1);
    });

    it("Render component with data", () => {
        const company = { name: "name" };

        const element = shallow(<Card auth={auth} company={company} />);
        expect(element.find("Avatar").length).toBe(1);
        expect(element.find("div").length).toBe(1);
    });

    it("Render component with prop type not in [user, company] ", () => {
        const company = { name: "name" };

        shallow(<Card auth={auth} company={company} type={""} />);

        expect(console.error).toHaveBeenCalledTimes(1);
    });
});
