import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter, FieldCenterFull } from "./styled";
import { compose } from "redux";
import { getCompany, addCompany } from "../../actions/companies";
import { addInvitation, addInvitationReset } from "../../actions/team";
import { getGoals } from "../../actions/goals";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

import { Spin, notification } from "antd";

import SplugaCard from "../../components/splugaCard";
import CompanyForm from "../../components/companyForm";
import CompanyTeam from "../../components/companyTeam";
import SplugaTips from "../../components/splugaTips";
import ActivityResult from "../../components/activityResult";

export const Companies = ({
    auth,
    company,
    companyCreated,
    getCompany,
    addCompany,
    addInvitation,
    addInvitationReset,
    invitation,
    getGoals,
    goals,
    intl
}) => {
    const [selectedFile, setSelectedFile] = useState("");
    useEffect(() => {
        getGoals({});
    }, [getGoals]);

    useEffect(() => {
        getCompany({});
    }, [getCompany, companyCreated]);

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
        const user = auth.currentUser.name;
        addInvitation(data.email, companyId, user);
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

    const activities = selectedCompany ? selectedCompany.activities : [];
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
                    <ActivityResult activities={activities} goals={goalsList} />
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
    company: state.getCompany,
    companyCreated: state.addCompany,
    invitation: state.addInvitation.status,
    goals: state.getGoals
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addCompany, addInvitation, addInvitationReset, getGoals }
    )
);

export default injectIntl(composedHoc(Companies));
