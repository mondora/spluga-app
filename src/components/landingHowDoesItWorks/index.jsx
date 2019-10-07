import React from "react";
import { Icon } from "antd";
import { FormattedMessage } from "react-intl";
import { PageContainer, Title, StepsContainer, Col } from "./styled";

export const LandingHowDoesItWorks = () => {
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
                    <FormattedMessage id="c-landingHowDoesItWork.setYourTraget" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landingHowDoesItWork.collectActivity" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landingHowDoesItWork.monitorYourProgress" />
                </Col>
                <Col>
                    <FormattedMessage id="general.producePositiveImpact" />
                </Col>
            </StepsContainer>
        </PageContainer>
    );
};

export default LandingHowDoesItWorks;
