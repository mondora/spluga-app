import React, { Fragment } from "react";
import { CompanyFormContainer, Title } from "./styled";
import { FormattedMessage } from "react-intl";

export const CompanyTeam = () => {
    return (
        <Fragment>
            <CompanyFormContainer>
                <Title>
                    <FormattedMessage id="c-companyTeam.title" />
                </Title>
            </CompanyFormContainer>
        </Fragment>
    );
};

export default CompanyTeam;
