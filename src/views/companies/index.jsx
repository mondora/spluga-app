import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContainer, SpinContainer, FieldLeft, FieldRight, FieldCenter } from "./styled";
import { compose } from "redux";
import { getCompany, addCompany } from "../../actions/companies";
import { addInvitation } from "../../actions/team";
import { connect } from "react-redux";

import { Spin } from "antd";

import SplugaCard from "../../components/splugaCard";
import CompanyForm from "../../components/companyForm";
import CompanyTeam from "../../components/companyTeam";

export const Companies = ({ company, companyCreated, getCompany, addCompany, auth, addInvitation }) => {
    const [selectedFile, setSelectedFile] = useState("");
    useEffect(() => {
        getCompany({});
    }, [getCompany, companyCreated]);

    const handleSelectFile = base64 => {
        setSelectedFile(base64);
    };

    const handleSubmit = data => {
        data.logo = selectedFile;
        const ownerId = auth.currentUser.id;
        addCompany(data, ownerId);
    };

    const handleInvite = data => {
        const ownerId = auth.currentUser.id;
        addInvitation(data.email, ownerId, company.companies[0]._id);
    };

    //const serverError = null; //TODO: manage
    const getCompanyStatus = company.status;
    const createCompanyStatus = companyCreated.status;
    const companyExist = company && company.companies && company.companies.length > 0;
    const loading =
        getCompanyStatus && createCompanyStatus ? getCompanyStatus.started || createCompanyStatus.started : true;

    return !loading ? (
        companyExist ? (
            <PageContainer>
                <FieldLeft>
                    <SplugaCard auth={auth} company={company.companies[0]} type={"company"} />
                </FieldLeft>
                <FieldRight>
                    <CompanyTeam onInvite={handleInvite} />
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
    addInvitation: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    companyCreated: state.addCompany
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addCompany, addInvitation }
    )
);

export default composedHoc(Companies);
