import React from "react";
import { Icon } from "antd";
import { PageContainer, Title, Desc, SubTitle, WhatIsGrid, WhatIsIcon, List } from "./styled";
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
            <SubTitle>
                <FormattedMessage id="c-landing-whatIs.subTitle" />
            </SubTitle>
            <SubTitle>
                <FormattedMessage id="c-landing-whatIs.subTitle2" />
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
                        <FormattedMessage id="c-landing-whatIs.action1" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landing-whatIs.action2" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landing-whatIs.action3" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landing-whatIs.action4" />
                    </li>
                </List>
                <List>
                    <li>
                        <FormattedMessage id="c-landing-whatIs.action5" />
                    </li>
                    <li>
                        <FormattedMessage id="c-landing-whatIs.action6" />
                    </li>
                </List>
            </WhatIsGrid>
        </PageContainer>
    );
};

export default WhatIs;
