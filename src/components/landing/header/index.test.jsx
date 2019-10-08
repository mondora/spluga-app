import React from "react";
import { Header } from ".";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
    it("Render component with data", () => {
        const element = shallow(<Header />);

        expect(element.find("FormattedHTMLMessage").length).toBe(1);
        expect(element.find("FormattedMessage").length).toBe(1);
    });
});
