import React from "react";

import { StepIntroContainer, StepAction, Img } from "../styled";
import { FormattedMessage } from "react-intl";

//export function for testing pourpose
export const StepIntro = () => {
    return (
        <StepAction>
            <StepIntroContainer>
                <Img src="img/spluga-logo-black-02.png" alt="spluga-logo" />
            </StepIntroContainer>
            <StepIntroContainer>
                <FormattedMessage id="c-splugaNewTarget.intro" />
            </StepIntroContainer>
        </StepAction>
    );
};

export default StepIntro;
