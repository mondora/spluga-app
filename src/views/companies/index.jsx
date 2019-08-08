import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContainer, SpinContainer, Title } from "./styled";
import { getCompany, addCompany } from "../../actions/companies";
import { connect } from "react-redux";

import { Spin } from "antd";

import SplugaCard from "../../components/splugaCard";
import SplugaForm from "../../components/splugaForm";

export const Companies = ({ company, getCompany, addCompany, auth, getCompanyStatus, addCompanyStatus }) => {
    const [loading, setLoading] = useState(true);
    const [companyCreated, setCompanyCreated] = useState(false);
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

    const handleSubmit = data => {
        const ownerId = auth.currentUser.id;
        addCompany(data, ownerId);
    };
    const serverError = null;

    const fields = [
        {
            name: "name",
            description: "Name",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        }
    ];

    return !loading && !getCompanyStatus.started ? (
        <PageContainer>
            {company.companies === undefined || company.companies.length === 0 ? (
                <SplugaForm title="Create Company" fields={fields} serverError={serverError} onSubmit={handleSubmit} />
            ) : (
                <div>
                    <Title>Company</Title>
                    <SplugaCard auth={auth} company={company.companies[0]} type={"company"} />
                </div>
            )}
        </PageContainer>
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
    addCompanyStatus: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.read,
    write: state.write,
    getCompanyStatus: state.read.status,
    addCompanyStatus: state.write.status
});

export default connect(
    mapStateToProps,
    { getCompany, addCompany }
)(Companies);
