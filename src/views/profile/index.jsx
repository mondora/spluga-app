import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { getCompany } from "../../actions/companies";
import { getUser, addUser } from "../../actions/users";
import { getGoals } from "../../actions/goals";

import SplugaCard from "../../components/splugaCard";
import CompanyTarget from "../../components/companyTarget";
import { Spin, notification } from "antd";
import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter } from "./styled";
import { SplugaTips } from "../../components/splugaTips";
import { ActivityResult } from "../../components/activityResult";
import { addTarget } from "../../actions/targets";

export const Profile = ({
    auth,
    getCompany,
    addTarget,
    getUser,
    addUser,
    user,
    company,
    target,
    intl,
    getGoals,
    goals
}) => {
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        getGoals({});
    }, [getGoals]);

    useEffect(() => {
        getUser({});
    }, [getUser]);

    useEffect(() => {
        const { ended, error, errorInfo } = target;
        if (ended || error) {
            const type = error ? "error" : "info";
            var id = error ? errorInfo.message : "v-companies.target.success";
            const message = intl.formatMessage({ id, defaultMessage: id });
            notify(type, message);
        }
    }, [target, intl]);

    const handleAddTarget = data => {
        const companyId = company && company.result ? company.result._id : null;
        addTarget(data, auth.currentUser, companyId);
    };

    const notify = (type, message) => {
        notification[type]({
            message: type,
            description: message
        });
    };

    const selectedUser = user ? user.result : null;
    const status = user ? user.status : { ended: true };

    if (status.ended && !selectedUser) {
        addUser(auth.currentUser);
    }

    const loading = company && company.status ? company.status.started : true;
    const selectedCompany = company && company.result ? company.result : null;
    const targets = selectedCompany ? selectedCompany.targets : [];
    const activities = selectedUser ? selectedUser.activities : [];
    const goalsList = goals ? goals.goals : [];

    return !loading ? (
        <PageContainer>
            <FieldLeft>
                <SplugaCard auth={auth} type={"user"} />
            </FieldLeft>
            <FieldRight>
                <CompanyTarget onAddTarget={handleAddTarget} targets={targets} goals={goalsList} />
            </FieldRight>
            <FieldCenter>
                <ActivityResult activities={activities} goals={goalsList} />
            </FieldCenter>

            <SplugaTips isCompany={false} />
        </PageContainer>
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};
Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    company: PropTypes.object,
    user: PropTypes.object,
    target: PropTypes.object,
    getCompany: PropTypes.func,
    getUser: PropTypes.func,
    addUser: PropTypes.func,
    addTarget: PropTypes.func,
    getGoals: PropTypes.func,
    goals: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    user: state.getUser,
    goals: state.getGoals,
    target: state.addTarget.status
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addTarget, getUser, addUser, getGoals }
    )
);

export default injectIntl(composedHoc(Profile));
