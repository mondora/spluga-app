import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { getCompany } from "../../actions/companies";

import SplugaCard from "../../components/splugaCard";
import CompanyTarget from "../../components/companyTarget";
import { Spin, notification } from "antd";
import { PageContainer, SpinContainer, FieldLeft, FieldRight } from "./styled";
import { SplugaTips } from "../../components/splugaTips";
import { addTarget } from "../../actions/targets";

export const Profile = ({ auth, getCompany, addTarget, company, target, intl }) => {
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        const { ended, error, errorInfo } = target;
        if (ended || error) {
            const type = error ? "error" : "info";
            var id = error ? errorInfo.message : "v-companies.target.success";
            const message = intl.formatMessage({ id, defaultMessage: id });
            notify(type, message);
        }
    }, [target, intl]);

    const handleAddTarget = data => {
        const companyId = company && company.result ? company.result._id : null;
        addTarget(data, auth.currentUser, companyId);
    };

    const notify = (type, message) => {
        notification[type]({
            message: type,
            description: message
        });
    };

    const loading = company && company.status ? company.status.started : true;
    const selectedCompany = company && company.result ? company.result : null;
    const targets = selectedCompany ? selectedCompany.targets : [];

    return !loading ? (
        <PageContainer>
            <FieldLeft>
                <SplugaCard auth={auth} company={selectedCompany} type={"user"} />
            </FieldLeft>
            <FieldRight>
                <CompanyTarget onAddTarget={handleAddTarget} targets={targets} />
            </FieldRight>
            <SplugaTips isCompany={false} />
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
    target: PropTypes.object,
    getCompany: PropTypes.func,
    addTarget: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    target: state.addTarget.status
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany, addTarget }
    )
);

export default injectIntl(composedHoc(Profile));
