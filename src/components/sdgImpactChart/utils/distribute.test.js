import distribute from "./distribute";

describe("distribute function", () => {
    it("returns an array of 36 elements containing an empty object if activities is an empty list", () => {
        const expected = Array.from({ length: 36 }, () => ({}));
        expect(distribute([])).toEqual(expected);
    });

    it("returns an array of 36 elements containing 16 each, filled with the number of the activities for each goal", () => {
        const activities = [
            { date: "2020-01-01", goal: "busTravel" },
            { date: "2020-04-01", goal: "busTravel" },
            { date: "2020-04-01", goal: "busTravel" },
            { date: "2020-04-01", goal: "training" },
            { date: "2020-04-01", goal: "trainTravel" },
            { date: "2020-05-01", goal: "waterSaved" },
            { date: "2020-05-01", goal: "co2Saved" },
            { date: "2020-06-01", goal: "training" },
            { date: "2020-06-11", goal: "training" },
            { date: "2020-06-12", goal: "training" },
            { date: "2020-08-01", goal: "busTravel" },
            { date: "2020-08-01", goal: "busTravel" },
            { date: "2020-08-01", goal: "trainTravel" },
            { date: "2020-08-01", goal: "treeSaved" },
            { date: "2020-09-01", goal: "openSourceCode" },
            { date: "2020-11-01", goal: "treeSaved" },
            { date: "2020-12-01", goal: "busTravel" },
            { date: "2020-12-01", goal: "plasticSaved" },
        ];
        const expected = [
            { "10": 1, "12": 1 },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            { "3": 1, "7": 1, "10": 3, "12": 3 },
            {},
            {},
            { "10": 2, "11": 2, "12": 2, "13": 2, "14": 2 },
            {},
            {},
            { "3": 1, "7": 1 },
            { "3": 2, "7": 2 },
            {},
            {},
            {},
            {},
            { "10": 4, "11": 1, "12": 4, "13": 1, "14": 1 },
            {},
            {},
            { "3": 1 },
            {},
            {},
            {},
            {},
            {},
            { "10": 1, "11": 1, "12": 1, "13": 1, "14": 1 },
            {},
            {},
            { "10": 2, "11": 1, "12": 2, "13": 1, "14": 1 },
            {},
            {},
        ];
        expect(distribute(activities)).toEqual(expected);
    });
});
