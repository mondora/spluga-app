import getMonthSplit from "./getMonthSplit";

/*
 * the function distributes every activity over the month split, converting goal to SDG.
 * the result is an array composed of 36 elements, 3 for each month
 * and every element is composed by 17 elements, one for each SDG goal
 */
const goalToSDG = {
    bikeTravel: [3, 11, 13],
    busTravel: [11, 13],
    trainTravel: [11, 13],
    paperSaved: [11, 12, 13, 15],
    training: [4, 8],
    co2Saved: [11, 12, 13, 14, 15],
    waterSaved: [11, 12, 13, 14, 15],
    openSourceCode: [4],
    plasticSaved: [11, 12, 13, 14, 15],
    treeSaved: [11, 12, 13, 14, 15],
};

// eslint-disable-next-line
export default (activities) => {
    const rawDistribution = activities.reduce((acc, activity) => {
        // get the split of the month
        const position = getMonthSplit(activity.date);
        // get related sdg
        const relatedSDG = goalToSDG[activity.goal];
        relatedSDG.forEach((index) => {
            if (acc[position]) {
                if (acc[position][index - 1]) {
                    acc[position][index - 1] = acc[position][index - 1] + 1;
                } else {
                    acc[position][index - 1] = 1;
                }
            } else {
                acc[position] = {};
                acc[position][index - 1] = 1;
            }
        });

        return acc;
    }, []);
    return Array.from({ length: 36 }, (v, i) => (rawDistribution[i] ? rawDistribution[i] : {}));
};
