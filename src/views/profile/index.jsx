import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCompany } from "../../actions/companies";

import SplugaCard from "../../components/splugaCard";
import CompanyTarget from "../../components/companyTarget";
import { Spin } from "antd";
import { PageContainer, SpinContainer, FieldLeft, FieldRight } from "./styled";

export const Profile = ({ auth, getCompany, company }) => {
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    const loading = company && company.status ? company.status.started : true;
    const selectedCompany = company && company.result ? company.result : null;
    return !loading ? (
        <PageContainer>
            <FieldLeft>
                <SplugaCard auth={auth} company={selectedCompany} type={"user"} />
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
    company: state.getCompany
});

export default connect(
    mapStateToProps,
    { getCompany }
)(Profile);
