import normalize from "./normalize";

describe("normalize function", () => {
    describe("if the sum of the goal's values is greater than 17", () => {
        it("sets 16 square for the goals that has the value greater than 16", () => {
            const rawSDGImpactMap = [{ "0": 22 }];
            expect(normalize(rawSDGImpactMap)).toEqual([{ "0": 17 }]);
        });

        it("sets the goal so the sum must not be greater than 16 ", () => {
            const rawSDGImpactMap = [
                { "0": 22, "1": 30 },
                { "5": 20, "6": 2 },
                { "0": 19, "6": 14, "7": 5 },
                { "1": 10, "6": 14, "7": 2, "8": 9 },
            ];
            const result = normalize(rawSDGImpactMap);
            const goalsSum = result.map((column) => Object.values(column).reduce((acc, i) => acc + i, 0));
            goalsSum.forEach((goalSum) => {
                expect(goalSum <= 17).toBe(true);
            });
        });

        it("sets 1 square for the goals that has the minimum value", () => {
            expect(
                normalize([
                    { "0": 2, "1": 16 },
                    { "0": 2, "1": 2 },
                ])
            ).toEqual([
                { "0": 1, "1": 14 },
                { "0": 1, "1": 1 },
            ]);
        });

        it("normalizes an impact map as expected: case 1", () => {
            const rawSDGImpactMap = [
                { "0": 2, "1": 10, "2": 1, "3": 3, "4": 1, "5": 1 },
                { "0": 3, "1": 5, "2": 1, "4": 2 },
                { "0": 2, "3": 4, "4": 1, "5": 5 },
                { "2": 4, "3": 13, "4": 1 },
            ];
            expect(normalize(rawSDGImpactMap)).toEqual([
                { "0": 2, "1": 8, "2": 1, "3": 2, "4": 1, "5": 1 },
                { "0": 4, "1": 7, "2": 1, "4": 3 },
                { "0": 3, "3": 5, "4": 1, "5": 7 },
                { "2": 4, "3": 12, "4": 1 },
            ]);
        });

        it("normalizes an impact map as expected: case 2", () => {
            const rawSDGImpactMap = [
                { "0": 4, "1": 5, "2": 3 },
                { "0": 6, "1": 10, "2": 3, "3": 21, "5": 8, "7": 1 },
                { "2": 4, "3": 13, "4": 3 },
                { "0": 5, "3": 4, "4": 3, "7": 3 },
                { "0": 30 },
            ];
            expect(normalize(rawSDGImpactMap)).toEqual([
                { "0": 6, "1": 7, "2": 4 },
                { "0": 2, "1": 3, "2": 1, "3": 7, "5": 3, "7": 1 },
                { "2": 3, "3": 11, "4": 3 },
                { "0": 6, "3": 5, "4": 3, "7": 3 },
                { "0": 17 },
            ]);
        });
    });

    describe("if the sum of the goal's values is not greater than 17", () => {
        it("returns the impact map as provided", () => {
            const rawSDGImpactMap = [
                { "0": 2, "1": 8, "2": 1, "3": 3, "4": 1, "5": 1 },
                { "0": 3, "1": 5, "2": 1, "4": 2 },
                { "0": 2, "3": 4, "4": 1, "5": 5 },
                { "2": 4, "3": 11, "4": 1 },
            ];
            expect(normalize(rawSDGImpactMap)).toEqual([
                { "0": 2, "1": 8, "2": 1, "3": 3, "4": 1, "5": 1 },
                { "0": 3, "1": 5, "2": 1, "4": 2 },
                { "0": 2, "3": 4, "4": 1, "5": 5 },
                { "2": 4, "3": 11, "4": 1 },
            ]);
        });
    });
});
