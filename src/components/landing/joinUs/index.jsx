import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";

import { INFO_EMAIL } from "../../../config";

import { PageContainer, Title, Desc } from "./styled";
export const JoinUs = () => {
    return (
        <Fragment>
            <PageContainer>
                <Title>
                    <FormattedMessage id="general.joinUs" />
                </Title>
                <Desc>
                    <FormattedMessage id="c-landing-joinUs.desc" />
                </Desc>
                <a href={`mailto:${INFO_EMAIL}`}>info@spluga.io</a>
            </PageContainer>
        </Fragment>
    );
};

export default JoinUs;
