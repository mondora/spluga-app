import React from "react";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import { PageContainer, RowContainer, ImageContainer, RowText, RowLink, LinkContainer, Img } from "./styled";

export const LandingHeader = () => {
    return (
        <PageContainer>
            <RowContainer>
                <RowText>
                    <FormattedHTMLMessage id="c-landingHeader.desc" />
                </RowText>
                <RowLink>
                    <LinkContainer to="what-is-spluga" smooth={true} duration={1500}>
                        <FormattedMessage id="general.whatIs" />
                    </LinkContainer>
                </RowLink>
            </RowContainer>
            <ImageContainer>
                <Img src="img/spluga-logo-white.png" alt="spluga-logo" />
            </ImageContainer>
        </PageContainer>
    );
};

export default LandingHeader;
