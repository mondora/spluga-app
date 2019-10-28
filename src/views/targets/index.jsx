import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { getCompany } from "../../actions/companies";

import { Radio } from "antd";

import { PageContainer, Cards, Header } from "./styled";
import TargetCard from "../../components/targetCard";

export const Targets = ({ company, getCompany }) => {
    const [category, setCategory] = useState("All");
    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    const selectedCompany = company && company.status.ended && company.result ? company.result : null;
    const targets = selectedCompany && selectedCompany.targets ? selectedCompany.targets : [];
    const stakeholders = targets.map(t => t.stakeholder);
    const members = stakeholders ? stakeholders.filter((s, index) => stakeholders.indexOf(s) === index) : [];

    return selectedCompany ? (
        <PageContainer>
            <Header>
                  
                <Radio.Group defaultValue={"All"} buttonStyle="solid" onChange={e => setCategory(e.target.value)}>
                    <Radio.Button value={"All"}>{<FormattedMessage id="v-targets.stakeholder" />}</Radio.Button>
                    {members.map(s => (
                        <Radio.Button key={`button-${s}`} value={s.toString()}>
                            {s}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Header>
            <Cards>
                {category === "All"
                    ? targets.map((target, index) => <TargetCard key={index} target={target} />)
                    : targets
                          .filter(target => target.stakeholder === category)
                          .map((target, index) => <TargetCard key={index} target={target} />)}
            </Cards>
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
