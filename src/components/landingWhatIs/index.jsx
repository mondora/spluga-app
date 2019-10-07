import React from "react";
import { Icon } from "antd";
import { PageContainer, Title, Desc, SubTitle, WhatIsGrid, WhatIsIcon, List } from "./styled";
import { FormattedMessage } from "react-intl";
export const LandingWhatIs = () => {
    return (
        <PageContainer>
            <Title>
                <FormattedMessage id="general.whatIs" />
            </Title>
            <Desc>
                <FormattedMessage id="c-landingWhatIs.desc" />
            </Desc>
            <SubTitle>
                <FormattedMessage id="c-landingWhatIs.subTitle" />
            </SubTitle>
            <SubTitle>
                <FormattedMessage id="c-landingWhatIs.subTitle2" />
            </SubTitle>
            <WhatIsGrid>
                <WhatIsIcon>
                    <Icon type="check-circle" />
                </WhatIsIcon>
                <WhatIsIcon>
                    <Icon type="team" />
                </WhatIsIcon>
                <WhatIsIcon>
                    <Icon type="trophy" />
                </WhatIsIcon>
                <List>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action1" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action2" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action3" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action4" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action5" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landingWhatIs.action6" />
                    </li>
                </List>
            </WhatIsGrid>
        </PageContainer>
    );
};

export default LandingWhatIs;
