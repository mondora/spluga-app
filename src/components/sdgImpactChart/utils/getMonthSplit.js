/*
 * the function get the split of the month where the provided date is
 */

// eslint-disable-next-line
export default (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    if (day < 10) {
        return month * 3;
    }
    if (day < 20) {
        return month * 3 + 1;
    }
    return month * 3 + 2;
};
