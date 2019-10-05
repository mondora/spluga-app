import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { getCompany } from "../../actions/companies";

import { Radio } from "antd";

import { PageContainer } from "./styled";

//TODO: per ogni stakeholder mappo le card con descrizione e nome target piu progress

export const Targets = ({ company, getCompany }) => {
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    const selectedCompany = company && company.status.ended && company.result ? company.result : null;

    const stakeholders = selectedCompany ? selectedCompany.targets.map(t => t.stakeholder) : [];

    const members = stakeholders ? stakeholders.filter((s, index) => stakeholders.indexOf(s) === index) : [];

    return selectedCompany ? (
        <PageContainer>
            <Radio.Group defaultValue={"Tutti"} buttonStyle="solid">
                <Radio.Button value={"Tutti"}>{"Tutti"}</Radio.Button>

                {members.map(s => (
                    <Radio.Button key={`button-${s}`} value={s.toString()}>
                        {s}
                    </Radio.Button>
                ))}
            </Radio.Group>
        </PageContainer>
    ) : (
        <div></div>
    );
};

Targets.propTypes = {
    company: PropTypes.object,
    getCompany: PropTypes.func
};

const mapStateToProps = state => ({
    company: state.getCompany
});

const composedHoc = compose(
    connect(
        mapStateToProps,
        { getCompany }
    )
);

export default injectIntl(composedHoc(Targets));
