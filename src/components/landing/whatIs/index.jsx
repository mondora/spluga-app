import React from "react";
import { PageContainer, Title, Desc } from "./styled";
import { FormattedMessage } from "react-intl";
export const WhatIs = () => {
    return (
        <PageContainer>
            <Title>
                <FormattedMessage id="general.whatIs" />
            </Title>
            <Desc>
                <FormattedMessage id="c-landing-whatIs.desc" />
            </Desc>
        </PageContainer>
    );
};

export default WhatIs;
