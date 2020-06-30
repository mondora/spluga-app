import PropTypes from "prop-types";
import React from "react";

import sdgs from "../../common/sdgs";
import distribute from "./utils/distribute";
import normalize from "./utils/normalize";
import { Container } from "./styled";
import Square from "./square";
import EmptySquare from "./emptySquare";

/*
 * The goal of the component is to draw a grid composed by:
 * rows that represents a certain period of the year,
 * and columns that represents the quantity of activities related to a specific sdg.
 * Every sdg as least one square, the quantity of squares are calculated using the
 * activity's date and the sdg. At the moment it is too difficult to calculate the weigth of
 * the activitiy, because we do not have a fixed comparison term.
 * The sdgs are shuffoled to render each sdg in a different position in different columns (a style improvment).
 * The remaining squares are filled with gray color.
 */
const SDGImpactChart = React.memo(({ activities }) => {
    const normalizedActivities = normalize(distribute(activities));
    return (
        <Container>
            {normalizedActivities.map((column, x) => {
                // random sort of SDG impact
                const shuffoledSDGImpact = Object.keys(column).reduce(
                    (acc, i) =>
                        Math.random() > 0.5
                            ? [...acc, ...Array.from({ length: column[i] }, () => i)]
                            : [...Array.from({ length: column[i] }, () => i), ...acc],
                    []
                );
                return Array.from({ length: 16 }, (v, y) =>
                    shuffoledSDGImpact[y] ? (
                        <Square sdg={sdgs[shuffoledSDGImpact[y]]} key={`${x}${y}`} x={x} y={16 - y} />
                    ) : (
                        <EmptySquare key={`${x}${y}`} x={x} y={16 - y} />
                    )
                );
            })}
        </Container>
    );
});

SDGImpactChart.propTypes = {
    activities: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.string, goal: PropTypes.string })),
};

export default SDGImpactChart;
