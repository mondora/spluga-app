import PropTypes from "prop-types";
import React, { useState } from "react";

import { Container, ColoredSquare, Tooltip } from "./styled";

const Square = React.memo(({ sdg, x, y }) => {
    const [isTooltipVisible, setTooltipVisibility] = useState(false);
    const [rotation] = useState(Math.random() * 24 - 12);

    return (
        <>
            <Container
                onMouseOver={() => setTooltipVisibility(true)}
                onMouseLeave={() => setTooltipVisibility(false)}
                x={x}
                y={y}
            >
                <ColoredSquare color={sdg.color} rotation={rotation} />
                <Tooltip isVisible={isTooltipVisible} color={sdg.color}>
                    {sdg.name}
                </Tooltip>
            </Container>
        </>
    );
});

Square.propTypes = {
    sdg: PropTypes.shape({
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
};

export default Square;
