import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
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

                <a href="info@spluga.io">info@spluga.io</a>
            </PageContainer>
        </Fragment>
    );
};

export default JoinUs;
