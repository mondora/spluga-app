import React from "react";
import { Steps, Icon } from "antd";

import { FormattedMessage } from "react-intl";
import { PageContainer, Title, StepsContainer, SubTitle, Descriptions, Col } from "./styled";

const { Step } = Steps;

export const HowDoesItWorks = () => {
    return (
        <PageContainer>
            <Title>
                <FormattedMessage id="general.howDoesItWork" />
                <SubTitle>
                    <FormattedMessage id="c-landing-howDoesItWork.subTitle" />
                </SubTitle>
            </Title>

            <StepsContainer>
                <Steps current={-1}>
                    <Step icon={<Icon type="login" style={{ fontSize: "40px" }} />} />
                    <Step icon={<Icon type="play-circle" style={{ fontSize: "40px" }} />} />
                    <Step icon={<Icon type="line-chart" style={{ fontSize: "40px" }} />} />
                    <Step icon={<Icon type="compass" style={{ fontSize: "40px" }} />} />
                    <Step icon={<Icon type="smile" style={{ fontSize: "40px" }} />} />
                </Steps>
            </StepsContainer>
            <Descriptions>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.create" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.collectActivity" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.monitorYourProgress" />
                </Col>
                <Col>
                    <FormattedMessage id="c-landing-howDoesItWork.invitePeople" />
                </Col>
            </Descriptions>
        </PageContainer>
    );
};

export default HowDoesItWorks;
