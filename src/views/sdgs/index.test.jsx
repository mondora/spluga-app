import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SdgsContainer, Sdg } from "./";

import Sdgs from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Sdgs", () => {
    it("Renders view without error", () => {
        const view = shallow(<Sdgs />);
        expect(view.find(SdgsContainer).length).toBe(1);
        expect(view.find("img").length).toBe(26);
        expect(view.find(Sdg).length).toBe(26);
        expect(view.find("Modal").length).toBe(9);
    });
});
//     describe("when I click on Sdg", () => {
//         it("Renders modal with description if click is defined", () => {
//             const view = shallow(<Sdgs />);
//             expect(
//                 view
//                     .find("Modal")
//                     .first()
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(1)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(2)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(3)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(4)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(5)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(6)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(7)
//                     .prop("visible")
//             ).toBe(false);
//             //first
//             view.find(Sdg)
//                 .first()
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .first()
//                     .prop("visible")
//             ).toBe(true);
//             //sdg3
//             view.find(Sdg)
//                 .at(3)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(1)
//                     .prop("visible")
//             ).toBe(true);
//             //sdg4
//             view.find(Sdg)
//                 .at(5)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(2)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(10)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(3)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(14)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(4)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(17)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(5)
//                     .prop("visible")
//             ).toBe(false);
//             //sdg14
//             view.find(Sdg)
//                 .at(19)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(6)
//                     .prop("visible")
//             ).toBe(false);

//             //sdg 15
//             view.find(Sdg)
//                 .at(21)
//                 .simulate("click");

//             expect(
//                 view
//                     .find("Modal")
//                     .at(7)
//                     .prop("visible")
//             ).toBe(false);
//         });
//     });
//     describe("when I press enter on Sdg", () => {
//         it("Renders modal with description if key press is defined", () => {
//             const view = shallow(<Sdgs />);
//             expect(
//                 view
//                     .find("Modal")
//                     .first()
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(1)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(2)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(3)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(4)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(5)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(6)
//                     .prop("visible")
//             ).toBe(false);

//             expect(
//                 view
//                     .find("Modal")
//                     .at(7)
//                     .prop("visible")
//             ).toBe(false);
//             //first
//             view.find(Sdg)
//                 .first()
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .first()
//                     .prop("visible")
//             ).toBe(true);
//             //sdg3
//             view.find(Sdg)
//                 .at(3)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(1)
//                     .prop("visible")
//             ).toBe(true);
//             //sdg4
//             view.find(Sdg)
//                 .at(5)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(2)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(10)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(3)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(14)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(4)
//                     .prop("visible")
//             ).toBe(true);

//             view.find(Sdg)
//                 .at(17)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(5)
//                     .prop("visible")
//             ).toBe(false);
//             //sdg14
//             view.find(Sdg)
//                 .at(19)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(6)
//                     .prop("visible")
//             ).toBe(false);

//             //sdg 15
//             view.find(Sdg)
//                 .at(21)
//                 .simulate("keypress", { key: "Enter" });

//             expect(
//                 view
//                     .find("Modal")
//                     .at(7)
//                     .prop("visible")
//             ).toBe(false);
//         });
//     });
