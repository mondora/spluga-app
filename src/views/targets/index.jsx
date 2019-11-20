import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { getCompany } from "../../actions/companies";
import { addTarget } from "../../actions/targets";
import { getGoals } from "../../actions/goals";
import { Link } from "react-router-dom";

import { Modal, Icon, Radio } from "antd";

import { PageContainer, Cards, Header, Title, FieldRight } from "./styled";
import TargetCard from "../../components/targetCard";
import { SplugaNewTarget } from "../../components/splugaNewTarget";

//TODO : add button for new targets

export const Targets = ({ auth, company, getCompany, addTarget, goals, getGoals }) => {
    const [category, setCategory] = useState("All");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    useEffect(() => {
        getGoals({});
    }, [getGoals]);

    const showModal = () => {
        setVisible(true);
    };

    const createTarget = data => {
        console.log("data", data);
        const companyId = company && company.result ? company.result._id : null;
        setVisible(false);
        addTarget(data, auth.currentUser, companyId);
    };

    const goalsList = goals ? goals.goals : [];
    const selectedCompany = company && company.status.ended && company.result ? company.result : null;
    const targets = selectedCompany && selectedCompany.targets ? selectedCompany.targets : [];
    const stakeholders = targets.map(t => t.stakeholder);
    const members = stakeholders ? stakeholders.filter((s, index) => stakeholders.indexOf(s) === index) : [];

    const targetsExpired = targets.filter(target => target.startDate > target.endDate);
    const targetsActive = targets.filter(target => target.startDate < target.endDate);
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

                <FieldRight>
                    <Link to="#" onClick={showModal}>
                        <Icon type="file-add" />
                        <FormattedMessage id="general.add" />
                    </Link>
                </FieldRight>

                <Modal
                    centered
                    destroyOnClose
                    title={<FormattedMessage id="c-splugaNewTarget.create" />}
                    visible={visible}
                    footer={null}
                    onCancel={() => setVisible(false)}
                >
                    <SplugaNewTarget onSubmit={createTarget} goals={goalsList} />
                    {console.log(goalsList)}
                </Modal>
            </Header>
            <Title> {<FormattedMessage id="v-targets.titleActive" />}</Title>
            <Cards>
                {category === "All"
                    ? targetsActive.map((target, index) => <TargetCard key={index} target={target} />)
                    : targetsActive
                          .filter(target => target.stakeholder === category)
                          .map((target, index) => <TargetCard key={index} target={target} />)}
            </Cards>
            <Title> {<FormattedMessage id="v-targets.titleExpired" />}</Title>
            <Cards>
                {category === "All"
                    ? targetsExpired.map((target, index) => <TargetCard key={index} target={target} />)
                    : targetsExpired
                          .filter(target => target.stakeholder === category)
                          .map((target, index) => <TargetCard key={index} target={target} />)}
            </Cards>
        </PageContainer>
    ) : (
        <div></div>
    );
};

Targets.propTypes = {
    auth: PropTypes.object,
    company: PropTypes.object,
    getCompany: PropTypes.func,
    addTarget: PropTypes.func,
    getGoals: PropTypes.func,
    goals: PropTypes.array
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    goals: state.getGoals
});

const composedHoc = compose(connect(mapStateToProps, { getCompany, addTarget, getGoals }));

export default injectIntl(composedHoc(Targets));
