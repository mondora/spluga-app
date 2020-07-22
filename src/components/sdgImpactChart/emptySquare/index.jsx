import PropTypes from "prop-types";
import React from "react";

import { Container } from "./styled";

const EmptySquare = React.memo(({ x, y }) => <Container x={x} y={y} />);

EmptySquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
};

export default EmptySquare;
