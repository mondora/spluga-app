import { shallow } from "enzyme";
import React from "react";
import { FormattedMessage } from "react-intl";

import MonthsBar from "./";

describe("MonthsBar", () => {
    const RealDate = Date.now;

    beforeAll(() => {
        global.Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
    });

    afterAll(() => {
        global.Date.now = RealDate;
    });

    it.each`
        startingMonth | month1 | month2 | month3 | month4 | month5 | month6 | month7 | month8 | month9 | month10 | month11 | month12
        ${0}          | ${0}   | ${1}   | ${2}   | ${3}   | ${4}   | ${5}   | ${6}   | ${7}   | ${8}   | ${9}    | ${10}   | ${11}
        ${1}          | ${1}   | ${2}   | ${3}   | ${4}   | ${5}   | ${6}   | ${7}   | ${8}   | ${9}   | ${10}   | ${11}   | ${0}
        ${2}          | ${2}   | ${3}   | ${4}   | ${5}   | ${6}   | ${7}   | ${8}   | ${9}   | ${10}  | ${11}   | ${0}    | ${1}
        ${3}          | ${3}   | ${4}   | ${5}   | ${6}   | ${7}   | ${8}   | ${9}   | ${10}  | ${11}  | ${0}    | ${1}    | ${2}
        ${4}          | ${4}   | ${5}   | ${6}   | ${7}   | ${8}   | ${9}   | ${10}  | ${11}  | ${0}   | ${1}    | ${2}    | ${3}
        ${5}          | ${5}   | ${6}   | ${7}   | ${8}   | ${9}   | ${10}  | ${11}  | ${0}   | ${1}   | ${2}    | ${3}    | ${4}
        ${6}          | ${6}   | ${7}   | ${8}   | ${9}   | ${10}  | ${11}  | ${0}   | ${1}   | ${2}   | ${3}    | ${4}    | ${5}
        ${7}          | ${7}   | ${8}   | ${9}   | ${10}  | ${11}  | ${0}   | ${1}   | ${2}   | ${3}   | ${4}    | ${5}    | ${6}
        ${8}          | ${8}   | ${9}   | ${10}  | ${11}  | ${0}   | ${1}   | ${2}   | ${3}   | ${4}   | ${5}    | ${6}    | ${7}
        ${9}          | ${9}   | ${10}  | ${11}  | ${0}   | ${1}   | ${2}   | ${3}   | ${4}   | ${5}   | ${6}    | ${7}    | ${8}
        ${10}         | ${10}  | ${11}  | ${0}   | ${1}   | ${2}   | ${3}   | ${4}   | ${5}   | ${6}   | ${7}    | ${8}    | ${9}
        ${11}         | ${11}  | ${0}   | ${1}   | ${2}   | ${3}   | ${4}   | ${5}   | ${6}   | ${7}   | ${8}    | ${9}    | ${10}
    `(
        "renders 12 labels starting from the provided month",
        ({
            startingMonth,
            month1,
            month2,
            month3,
            month4,
            month5,
            month6,
            month7,
            month8,
            month9,
            month10,
            month11,
            month12,
        }) => {
            global.Date.now = jest.fn(() => new Date(`2020-${startingMonth + 1}-01`).getTime());
            const component = shallow(<MonthsBar />);

            expect(component.find(FormattedMessage).at(0).prop("id")).toBe(`c-sdgImpactChart-months-${month1}`);
            expect(component.find(FormattedMessage).at(1).prop("id")).toBe(`c-sdgImpactChart-months-${month2}`);
            expect(component.find(FormattedMessage).at(2).prop("id")).toBe(`c-sdgImpactChart-months-${month3}`);
            expect(component.find(FormattedMessage).at(3).prop("id")).toBe(`c-sdgImpactChart-months-${month4}`);
            expect(component.find(FormattedMessage).at(4).prop("id")).toBe(`c-sdgImpactChart-months-${month5}`);
            expect(component.find(FormattedMessage).at(5).prop("id")).toBe(`c-sdgImpactChart-months-${month6}`);
            expect(component.find(FormattedMessage).at(6).prop("id")).toBe(`c-sdgImpactChart-months-${month7}`);
            expect(component.find(FormattedMessage).at(7).prop("id")).toBe(`c-sdgImpactChart-months-${month8}`);
            expect(component.find(FormattedMessage).at(8).prop("id")).toBe(`c-sdgImpactChart-months-${month9}`);
            expect(component.find(FormattedMessage).at(9).prop("id")).toBe(`c-sdgImpactChart-months-${month10}`);
            expect(component.find(FormattedMessage).at(10).prop("id")).toBe(`c-sdgImpactChart-months-${month11}`);
            expect(component.find(FormattedMessage).at(11).prop("id")).toBe(`c-sdgImpactChart-months-${month12}`);
        }
    );
});
