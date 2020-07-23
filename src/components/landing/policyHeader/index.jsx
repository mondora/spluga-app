import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { PageContainer, RowContainer, ImageContainer, RowText, Img } from "./styled";

export const PolicyHeader = ({ title }) => {
    return (
        <PageContainer>
            <ImageContainer>
                <Img src="img/spluga-logo-white-02.png" alt="spluga-logo" />
            </ImageContainer>
            <RowContainer>
                <RowText>
                    <FormattedMessage id={title} />
                </RowText>
            </RowContainer>
        </PageContainer>
    );
};

PolicyHeader.propTypes = {
    title: PropTypes.string,
};

export default PolicyHeader;
