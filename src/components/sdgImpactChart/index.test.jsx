import React from "react";
import { shallow } from "enzyme";

import distribute from "./utils/distribute";
import normalize from "./utils/normalize";
import Square from "./square";
import EmptySquare from "./emptySquare";
import SDGImpactChart from "./";

jest.mock("./utils/distribute", () => jest.fn().mockImplementation((activities) => activities));
jest.mock("./utils/normalize", () => jest.fn().mockImplementation((activities) => activities));

describe("SDGImpactChart", () => {
    beforeEach(() => {
        distribute.mockClear();
        normalize.mockClear();
    });

    it("calls distribute function providing activities prop", () => {
        shallow(<SDGImpactChart activities={[{ date: "2020-01-01", goal: "goal" }]} />);
        expect(distribute).toHaveBeenCalledWith([{ date: "2020-01-01", goal: "goal" }]);
    });

    it("calls normalize function providing the result of distribute function", () => {
        shallow(<SDGImpactChart activities={[{ date: "2020-02-01", goal: "goal" }]} />);
        expect(normalize).toHaveBeenCalledWith([{ date: "2020-02-01", goal: "goal" }]);
    });

    it("renders a Square for each activity and fills the remaining with an EmptySquare, case 1", () => {
        const activities = [
            {
                "10": 1,
                "11": 3,
                "12": 2,
            },
        ];
        const component = shallow(<SDGImpactChart activities={activities} />);

        expect(component.children().length).toBe(16);
        // check that the first 6 elements are Square
        let firstSixSquares = [];
        for (let i = 0; i < 6; i++) {
            expect(component.childAt(i).type()).toBe(Square);
            firstSixSquares = [...firstSixSquares, component.childAt(i).prop("sdg")];
        }
        expect(firstSixSquares.filter((i) => i.name === "Sustainable Cities and Communities").length).toBe(1);
        expect(firstSixSquares.filter((i) => i.name === "Responsible Consumption and Production").length).toBe(3);
        expect(firstSixSquares.filter((i) => i.name === "Climate Action").length).toBe(2);
        // check that the last 10 elements are EmptySquare
        for (let i = 7; i < 16; i++) {
            expect(component.childAt(i).type()).toBe(EmptySquare);
        }
    });

    it("renders a Square for each activity and fills the remaining with an EmptySquare, case 2", () => {
        const activities = [
            {
                "0": 4,
                "2": 3,
                "4": 6,
                "5": 1,
            },
        ];
        const component = shallow(<SDGImpactChart activities={activities} />);

        expect(component.children().length).toBe(16);
        // check that the first 6 elements are Square
        let firstFourteenSquares = [];
        for (let i = 0; i < 14; i++) {
            expect(component.childAt(i).type()).toBe(Square);
            firstFourteenSquares = [...firstFourteenSquares, component.childAt(i).prop("sdg")];
        }
        expect(firstFourteenSquares.filter((i) => i.name === "Gender Equality").length).toBe(6);
        expect(firstFourteenSquares.filter((i) => i.name === "No Poverty").length).toBe(4);
        expect(firstFourteenSquares.filter((i) => i.name === "Good Health and Well-being").length).toBe(3);
        expect(firstFourteenSquares.filter((i) => i.name === "Clean Water and Sanitation").length).toBe(1);
        // check that the last 2 elements are EmptySquare
        for (let i = 14; i < 16; i++) {
            expect(component.childAt(i).type()).toBe(EmptySquare);
        }
    });

    it("renders a Square for each activity and fills the remaining with an EmptySquare, case 3", () => {
        const activities = [
            {
                "1": 1,
                "3": 3,
                "6": 1,
                "7": 1,
                "8": 1,
                "10": 2,
                "11": 1,
                "12": 1,
            },
        ];
        const component = shallow(<SDGImpactChart activities={activities} />);

        expect(component.children().length).toBe(16);
        // check that the first 6 elements are Square
        let firstElevenSquares = [];
        for (let i = 0; i < 11; i++) {
            expect(component.childAt(i).type()).toBe(Square);
            firstElevenSquares = [...firstElevenSquares, component.childAt(i).prop("sdg")];
        }
        expect(firstElevenSquares.filter((i) => i.name === "Climate Action").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Responsible Consumption and Production").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Decent Work and Economic Growth").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Zero Hunger").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Quality Education").length).toBe(3);
        expect(firstElevenSquares.filter((i) => i.name === "Affordable and Clean Energy").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Industry, Innovation and Infrastructure").length).toBe(1);
        expect(firstElevenSquares.filter((i) => i.name === "Sustainable Cities and Communities").length).toBe(2);
        // check that the last 5 elements are EmptySquare
        for (let i = 11; i < 16; i++) {
            expect(component.childAt(i).type()).toBe(EmptySquare);
        }
    });

    describe("for Sqaure positioning", () => {
        it("renders a column for each element present in the normalized activities list setting y correctly", () => {
            const activities = [
                {
                    "1": 1,
                    "3": 3,
                },
                {
                    "2": 1,
                },
                {
                    "10": 2,
                    "11": 2,
                },
            ];
            const component = shallow(<SDGImpactChart activities={activities} />);

            expect(component.find(Square).length).toBe(9);
            // first column
            for (let i = 0; i < 16; i++) {
                expect(component.childAt(i).prop("x")).toBe(0);
            }
            // second column
            for (let i = 16; i < 32; i++) {
                expect(component.childAt(i).prop("x")).toBe(1);
            }
            // third column
            for (let i = 32; i < 48; i++) {
                expect(component.childAt(i).prop("x")).toBe(2);
            }
        });
    });
});
