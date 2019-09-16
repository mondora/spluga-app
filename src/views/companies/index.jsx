import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter } from "./styled";
import { compose } from "redux";
import { getCompany, addCompany } from "../../actions/companies";
import { addInvitation } from "../../actions/team";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

import { Spin, notification } from "antd";

import SplugaCard from "../../components/splugaCard";
import CompanyForm from "../../components/companyForm";
import CompanyTeam from "../../components/companyTeam";

export const Companies = ({
    auth,
    company,
    companyCreated,
    getCompany,
    addCompany,
    addInvitation,
    invitation,
    intl
}) => {
    const [selectedFile, setSelectedFile] = useState("");
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
        }
    }, [invitation, intl]);

    const handleSelectFile = base64 => {
        setSelectedFile(base64);
    };

    const handleSubmit = data => {
        data.logo = selectedFile;
        addCompany(data, auth.currentUser);
    };

    const handleInvite = data => {
        const companyId = company && company.result ? company.result._id : null;
        addInvitation(data.email, companyId);
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

    return !loading ? (
        selectedCompany ? (
            <PageContainer>
                <FieldLeft>
                    <SplugaCard auth={auth} company={selectedCompany} type={"company"} />
                </FieldLeft>
                <FieldRight>
                    <CompanyTeam onInvite={handleInvite} team={selectedCompany.team} />
                </FieldRight>
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
    invitation: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    companyCreated: state.addCompany,
    invitation: state.addInvitation.status
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addCompany, addInvitation }
    )
);

export default injectIntl(composedHoc(Companies));
