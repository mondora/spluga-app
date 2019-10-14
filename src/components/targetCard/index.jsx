import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardTitle, CardDescription, CardProgress } from "./styled";

import { Progress } from "antd";

//export TargetCard for testing pourpose
export const TargetCard = ({ target }) => {
    return (
        <CardContainer>
            <div>
                <CardTitle> {target.name}</CardTitle>
                <CardDescription>{target.description}</CardDescription>
            </div>

            <CardProgress>
                <Progress
                    type="circle"
                    strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068"
                    }}
                    percent={(target.actual * 100) / target.value}
                />
            </CardProgress>
        </CardContainer>
    );
};

TargetCard.defaultProps = {
    target: { name: "", description: "", actual: 0, value: 0 }
};

TargetCard.propTypes = {
    target: PropTypes.object
};

export default TargetCard;
