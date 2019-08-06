import React from "react";
import { Card } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//TODO
Enzyme.configure({ adapter: new Adapter() });

const auth = {
    currentUse: { profile: { data: { name: "name", picture: "url" } } }
};
describe("Card", () => {
    it("Render component with no data", () => {
        /*
        const element = shallow(<Card />);
        expect(element.find("img").length).toBe(1);
        expect(element.find("Avatar").length).toBe(1);
        */
    });
});
