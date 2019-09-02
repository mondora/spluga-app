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

export const Companies = ({
    company,
    getCompany,
    addCompany,
    auth,
    getCompanyStatus,
    addCompanyStatus,
    addInvitation
}) => {
    const [loading, setLoading] = useState(true);
    const [companyCreated, setCompanyCreated] = useState(false); //TODO: Serve???
    const [selectedFile, setSelectedFile] = useState("");
    useEffect(() => {
        getCompany({});
    }, [getCompany, companyCreated]);

    useEffect(() => {
        if (addCompanyStatus.ended) {
            setCompanyCreated(true);
        }
    }, [addCompanyStatus]);

    useEffect(() => {
        if (getCompanyStatus.ended) {
            setLoading(false);
        }
    }, [getCompanyStatus, companyCreated]);

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
    const companyExist = company && company.companies && company.companies.length > 0;
    return !loading && !getCompanyStatus.started ? (
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
    getCompany: PropTypes.func,
    addCompany: PropTypes.func,
    getCompanyStatus: PropTypes.object,
    addCompanyStatus: PropTypes.object,
    addInvitation: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    write: state.addCompany,
    getCompanyStatus: state.getCompany.status,
    addCompanyStatus: state.addCompany.status
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addCompany, addInvitation }
    )
);

export default composedHoc(Companies);
