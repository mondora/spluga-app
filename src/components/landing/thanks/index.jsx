import React from "react";
import { FormattedMessage } from "react-intl";
import { PageContainer, ImageContainer, Img, Desc } from "./styled";

export const Thanks = () => {
    return (
        <PageContainer>
            <ImageContainer>
                <Img src="img/spluga-logo-black-02.png" alt="spluga-logo" />
            </ImageContainer>
            <Desc>
                <FormattedMessage id="c-landing-thanks.message" />
            </Desc>
        </PageContainer>
    );
};

export default Thanks;
