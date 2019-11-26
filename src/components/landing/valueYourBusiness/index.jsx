import React from "react";
import { Icon } from "antd";
import { PageContainer, Title, VYBGrid, VYBIcon, List } from "./styled";
import { FormattedMessage } from "react-intl";
export const ValueYourBusiness = () => {
    return (
        <PageContainer>
            <Title>
                <FormattedMessage id="general.valueYourBusiness" />
            </Title>
            <VYBGrid>
                <VYBIcon>
                    <Icon type="check-circle" />
                </VYBIcon>
                <VYBIcon>
                    <Icon type="team" />
                </VYBIcon>
                <VYBIcon>
                    <Icon type="trophy" />
                </VYBIcon>
                <List>
                    <li>
                        <FormattedMessage id="c-landing-valueYourBusiness.action1" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landing-valueYourBusiness.action2" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landing-valueYourBusiness.action3" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landing-valueYourBusiness.action4" />
                    </li>
                </List>
            </VYBGrid>
        </PageContainer>
    );
};

export default ValueYourBusiness;
