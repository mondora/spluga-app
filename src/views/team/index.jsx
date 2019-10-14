import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { acceptInvitation } from "../../actions/team";
import { PageContainer, SpinContainer } from "./styled";
import { Redirect } from "react-router-dom";

import { Spin, Alert } from "antd";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export const Team = ({ auth, acceptInvitation, acceptInvitationStatus }) => {
    useEffect(() => {
        if (auth && auth.currentUser) {
            acceptInvitation(auth.currentUser);
        }
    }, [auth, acceptInvitation]);

    const status = acceptInvitationStatus ? acceptInvitationStatus : { started: true };
    const { error, ended } = status;
    return ended ? (
        <Redirect to="/" />
    ) : error ? (
        <PageContainer>
            <Alert
                message={<FormattedMessage id="general.error" />}
                description={<FormattedMessage id="v-team.invitation.error.400.invalid" />}
                type="error"
                showIcon
            />
        </PageContainer>
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};

Team.propTypes = {
    auth: PropTypes.object.isRequired,
    id: PropTypes.object,
    acceptInvitation: PropTypes.func,
    acceptInvitationStatus: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    acceptInvitationStatus: state.acceptInvitation.status
});

export default connect(
    mapStateToProps,
    { acceptInvitation }
)(Team);
