import React from "react";
import { FormattedMessage } from "react-intl";
import { PageContainer, ImageContainer, Img, Desc } from "./styled";

export const LandingThanks = () => {
    return (
        <PageContainer>
            <ImageContainer>
                <Img src="img/spluga-logo-white-02.png" alt="spluga-logo" />
            </ImageContainer>
            <Desc>
                <FormattedMessage id="c-landingThanks.message" />
            </Desc>
        </PageContainer>
    );
};

export default LandingThanks;
