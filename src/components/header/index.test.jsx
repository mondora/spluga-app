import React from "react";
import { Header } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const currentUser = { profile: { data: { name: "name", picture: "url" } } };
describe("Header", () => {
    it("Render component with data", () => {
        const element = shallow(<Header user={currentUser} />);
        expect(element.find("Avatar").length).toBe(1);
    });
});

describe("Header", () => {
    it("Render component with no data", () => {
        const element = shallow(<Header />);
        expect(element.find("Avatar").length).toBe(1);
    });
});
