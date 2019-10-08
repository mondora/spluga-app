import React from "react";
import { Icon } from "antd";
import { FormattedMessage } from "react-intl";
import { PageContainer, Title, StepsContainer, Col } from "./styled";

export const HowDoesItWorks = () => {
    return (
        <PageContainer>
            <Title>
                <FormattedMessage id="general.howDoesItWork" />
            </Title>
            <StepsContainer>
                <Icon type="compass" />
                <Icon type="play-circle" />
                <Icon type="line-chart" />
                <Icon type="smile" />
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.setYourTraget" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.collectActivity" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.monitorYourProgress" />
                </Col>
                <Col>
                    <FormattedMessage id="general.producePositiveImpact" />
                </Col>
            </StepsContainer>
        </PageContainer>
    );
};

export default HowDoesItWorks;
