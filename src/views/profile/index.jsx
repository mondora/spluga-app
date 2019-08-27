import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCompany } from "../../actions/companies";

import SplugaCard from "../../components/splugaCard";
import CompanyTarget from "../../components/companyTarget";
import { Spin } from "antd";
import { PageContainer, SpinContainer, FieldLeft, FieldRight } from "./styled";

export const Profile = ({ auth, getCompany, company, getCompanyStatus }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        if (getCompanyStatus.ended) {
            setLoading(false);
        }
    }, [getCompanyStatus]);

    return !loading && !getCompanyStatus.started ? (
        <PageContainer>
            <FieldLeft>
                <SplugaCard auth={auth} company={company.companies[0]} type={"user"} />
            </FieldLeft>
            <FieldRight>
                <CompanyTarget />
            </FieldRight>
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
    getCompany: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.read,
    getCompanyStatus: state.read.status
});

export default connect(
    mapStateToProps,
    { getCompany }
)(Profile);
