import normalize from "./normalize";

describe("normalize function", () => {
    it("returns the value normalized if no input is more than 16", () => {
        const rawSDGImpactMap = [
            { "0": 2 },
            { "0": 1, "1": 2, "2": 3 },
            { "0": 1, "1": 2 },
            { "0": 4, "1": 5 },
            { "0": 2, "1": 3 },
        ];

        expect(normalize(rawSDGImpactMap)).toEqual([
            { "0": 2 },
            { "0": 1, "1": 2, "2": 6 },
            { "0": 1, "1": 2 },
            { "0": 9, "1": 13 },
            { "0": 2, "1": 6 },
        ]);
    });
});
