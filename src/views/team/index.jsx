import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useQueryParam, StringParam } from "use-query-params";
import { getPendingInvitation, acceptInvitation } from "../../actions/team";
import { PageContainer, SpinContainer } from "./styled";

import { Spin, Alert } from "antd";

import { compose } from "redux";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export const Team = ({ invitation, getPendingInvitation, acceptInvitation }) => {
    const [urlId] = useQueryParam("id", StringParam);

    useEffect(() => {
        getPendingInvitation(urlId);
    }, [getPendingInvitation, urlId]);

    useEffect(() => {
        if (invitation && invitation.result) {
            acceptInvitation(invitation.result);
        }
    }, [acceptInvitation, invitation]);
    const status = invitation && invitation.status ? invitation.status : { started: true };
    console.log(status);
    return !status.started ? (
        invitation && invitation.result ? (
            <PageContainer>{invitation.result.toString()}</PageContainer>
        ) : (
            <PageContainer>
                <Alert
                    message={<FormattedMessage id="general.error" />}
                    description={<FormattedMessage id="v-team.invalidInviation" />}
                    type="error"
                    showIcon
                />
            </PageContainer>
        )
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};

Team.propTypes = {
    id: PropTypes.object,
    getPendingInvitation: PropTypes.func,
    acceptInvitation: PropTypes.func
};

const mapStateToProps = state => ({
    invitation: state.getPendingInvitation
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getPendingInvitation, acceptInvitation }
    )
);

export default composedHoc(Team);
