import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useQueryParam, StringParam } from "use-query-params";
import { acceptInvitation } from "../../actions/team";
import { PageContainer, SpinContainer } from "./styled";

import { Spin, Alert } from "antd";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export const Team = ({ auth, acceptInvitation, acceptInvitationStatus }) => {
    const [urlId] = useQueryParam("id", StringParam);

    useEffect(() => {
        acceptInvitation(urlId, auth.currentUser);
    }, [auth, urlId, acceptInvitation]);
    const status = acceptInvitationStatus ? acceptInvitationStatus : { started: true };
    const { started, error, errorInfo } = status;
    const errorId = errorInfo && errorInfo.message ? errorInfo.message : "general.error";
    return !started ? (
        !error ? (
            <PageContainer>{}</PageContainer>
        ) : (
            <PageContainer>
                <Alert
                    message={<FormattedMessage id="general.error" />}
                    description={<FormattedMessage id={errorId} />}
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
