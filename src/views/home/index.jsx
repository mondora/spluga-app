import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCompany } from "../../actions/companies";

import Card from "../../components/card";
import { Spin } from "antd";
import { PageContainer, SpinContainer } from "./styled";

export const Home = ({ auth, getCompany, company, getCompanyStatus }) => {
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
            <Card auth={auth} company={company.companies[0]} type={"user"} />
            <Card auth={auth} company={company.companies[0]} type={"company"} />
        </PageContainer>
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};
Home.propTypes = {
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
)(Home);
