import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { useIntl } from "react-intl";
import { Spin, notification } from "antd";

import { getCompany, addCompany } from "../../actions/companies";
import { addInvitation, addInvitationReset } from "../../actions/team";
import { getGoals } from "../../actions/goals";
import { getActivities } from "../../actions/activities";

import { PUBLISHED_HOSTNAME } from "../../config";
import SplugaCard from "../../components/splugaCard";
import CompanyForm from "../../components/companyForm";
import CompanyTeam from "../../components/companyTeam";
import SplugaTips from "../../components/splugaTips";
import ActivityResult from "../../components/activityResult";

import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter, FieldCenterFull } from "./styled";

export const Companies = ({
    auth,
    activities,
    company,
    companyCreated,
    getCompany,
    addCompany,
    addInvitation,
    addInvitationReset,
    invitation,
    getGoals,
    getActivities,
    goals
}) => {
    const intl = useIntl();
    const [selectedFile, setSelectedFile] = useState("");
    useEffect(() => {
        getGoals({});
    }, [getGoals]);

    useEffect(() => {
        getCompany({});
    }, [getCompany, companyCreated]);

    useEffect(() => {
        const companyId = company && company.result ? company.result._id.toString() : null;
        getActivities({ companyId: companyId });
    }, [getActivities, company]);

    useEffect(() => {
        const { ended, error, errorInfo } = invitation;
        if (ended || error) {
            const type = error ? "error" : "info";
            var id = error ? errorInfo.message : "v-team.invitation.success";
            const message = intl.formatMessage({ id, defaultMessage: id });
            notify(type, message);
            addInvitationReset();
        }
    }, [addInvitationReset, invitation, intl]);

    const handleSelectFile = base64 => {
        setSelectedFile(base64);
    };

    const handleSubmit = data => {
        data.logo = selectedFile;
        addCompany(data, auth.currentUser);
    };

    const handleInvite = data => {
        const companyId = company && company.result ? company.result._id : null;
        const companyName = company && company.result ? company.result.name : null;
        const publishedHostName = PUBLISHED_HOSTNAME;
        const message = intl.formatMessage({ id: "email.invitation.text" }, { companyName, publishedHostName });
        const subject = intl.formatMessage({ id: "email.invitation.subject" });
        addInvitation(data.email, companyId, subject, message);
    };

    const notify = (type, message) => {
        notification[type]({
            message: type,
            description: message
        });
    };

    //const serverError = null; //TODO: manage
    const getCompanyStatus = company.status;
    const createCompanyStatus = companyCreated.status;
    const selectedCompany = company && company.result ? company.result : null;
    const loading =
        getCompanyStatus && createCompanyStatus ? getCompanyStatus.started || createCompanyStatus.started : true;

    const activitiesList = activities ? activities.activities : [];
    const goalsList = goals ? goals.goals : [];

    return !loading ? (
        selectedCompany ? (
            <PageContainer>
                <FieldLeft>
                    <SplugaCard auth={auth} company={selectedCompany} type={"company"} />
                </FieldLeft>
                <FieldRight>
                    <CompanyTeam onInvite={handleInvite} team={selectedCompany.team} />
                </FieldRight>
                <FieldCenterFull>
                    <ActivityResult activities={activitiesList} goals={goalsList} />
                </FieldCenterFull>
                <SplugaTips isCompany />
            </PageContainer>
        ) : (
            <PageContainer>
                <FieldCenter>
                    <CompanyForm onSubmit={handleSubmit} onSelectFile={handleSelectFile} />
                </FieldCenter>
            </PageContainer>
        )
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};

Companies.propTypes = {
    auth: PropTypes.object.isRequired,
    company: PropTypes.object,
    activities: PropTypes.object,
    companyCreated: PropTypes.object,
    getCompany: PropTypes.func,
    addCompany: PropTypes.func,
    addInvitation: PropTypes.func,
    invitation: PropTypes.object,
    getGoals: PropTypes.func,
    goals: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    activities: state.getActivities,
    company: state.getCompany,
    companyCreated: state.addCompany,
    invitation: state.addInvitation.status,
    goals: state.getGoals
});

const composedHoc = compose(
    connect(mapStateToProps, { getCompany, addCompany, addInvitation, addInvitationReset, getGoals, getActivities })
);

export default composedHoc(Companies);
