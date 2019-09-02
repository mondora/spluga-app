import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useQueryParam, StringParam } from "use-query-params";
import { getPendingInvitation, acceptInvitation } from "../../actions/team";
import { PageContainer, SpinContainer } from "./styled";

import { Spin, Alert } from "antd";

import { compose } from "redux";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export const Team = ({ invitation, getPendingInvitation, getPendingInvitationStatus, acceptInvitation }) => {
    const [urlId] = useQueryParam("id", StringParam);

    useEffect(() => {
        getPendingInvitation(urlId);
    }, [getPendingInvitation, urlId]);

    useEffect(() => {
        if (invitation) {
            acceptInvitation(invitation);
        }
    }, [acceptInvitation, invitation]);

    return !getPendingInvitationStatus.started ? (
        invitation ? (
            <PageContainer>{invitation.toString()}</PageContainer>
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
    getPendingInvitationStatus: PropTypes.object,
    acceptInvitation: PropTypes.func
};

const mapStateToProps = state => ({
    invitation: state.getPendingInvitation.invitation,
    getPendingInvitationStatus: state.getPendingInvitation.status
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getPendingInvitation, acceptInvitation }
    )
);

export default composedHoc(Team);
