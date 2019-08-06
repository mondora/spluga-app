import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { PageContainer } from "./styled";
import Card from "../../components/card";
import { getCompany } from "../../actions/companies";

const Home = ({ auth, getCompany, company, getCompanyStatus }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        if (getCompanyStatus.ended) {
            setLoading(false);
        }
    }, [getCompanyStatus]);

    return !loading ? (
        <PageContainer>
            <Card auth={auth} company={company} type={true} />
            <Card auth={auth} company={company} type={false} />
        </PageContainer>
    ) : (
        "SONO LENTO!"
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

//connecting my component at these functions (state, actionCreators)
export default connect(
    mapStateToProps,
    { getCompany }
)(Home);
