import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";

import { INFO_EMAIL } from "../../../config";

import { PageContainer, Title, Desc, Link } from "./styled";
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
                <Link href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</Link>
            </PageContainer>
        </Fragment>
    );
};

export default JoinUs;
