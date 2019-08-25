import React, { Fragment } from "react";
import { CompanyTeamContainer, Title, FieldLeft, FieldRight } from "./styled";
import { FormattedMessage } from "react-intl";
import { Icon } from "antd";

export const CompanyTeam = () => {
    return (
        <Fragment>
            <CompanyTeamContainer>
                <FieldLeft>
                    <Title>
                        <FormattedMessage id="c-companyTeam.title" />
                    </Title>
                </FieldLeft>
                <FieldRight>
                    <Icon type="user-add" />
                    <FormattedMessage id="c-companyTeam.invite" />
                </FieldRight>
            </CompanyTeamContainer>
        </Fragment>
    );
};

export default CompanyTeam;
