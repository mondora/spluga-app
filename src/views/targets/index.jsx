import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { Modal, Icon, Radio } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

import { getCompany } from "../../actions/companies";
import { addTarget } from "../../actions/targets";
import { getGoals } from "../../actions/goals";
import { PageContainer, Cards, Header, Title, SubTitle, FieldRight } from "./styled";
import TargetCard from "../../components/targetCard";
import SplugaNewTarget from "../../components/splugaNewTarget";

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

    const createTarget = target => {
        const companyId = company && company.result ? company.result._id : null;
        setVisible(false);
        addTarget(target, auth.currentUser, companyId);
    };

    const goalsList = goals && goals.goals ? goals.goals : [];
    const selectedCompany = company && company.status.ended && company.result ? company.result : null;
    const targets = selectedCompany && selectedCompany.targets ? selectedCompany.targets : [];
    const stakeholders = targets.map(t => t.stakeholder);
    const members = stakeholders ? stakeholders.filter((s, index) => stakeholders.indexOf(s) === index) : [];

    const targetFilter = category === "All" ? targets : targets.filter(target => target.stakeholder === category);

    const targetsExpired = targetFilter
        .filter(target => moment().diff(target.endDate, "days") > 0)
        .sort(function(a, b) {
            return new Date(a.endDate) - new Date(b.endDate);
        });
    const targetsActive = targetFilter
        .filter(target => moment().diff(target.endDate, "days") < 0)
        .sort(function(a, b) {
            return new Date(a.endDate) - new Date(b.endDate);
        });
    return selectedCompany ? (
        <PageContainer>
            <Title>
                <FormattedMessage id="c-splugaTarget.cardTitle" />
            </Title>
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
                </Modal>
            </Header>
            <SubTitle> {<FormattedMessage id="v-targets.titleActive" />}</SubTitle>
            <Cards>
                {targetsActive.map((target, index) => (
                    <TargetCard
                        key={index}
                        target={target}
                        goal={goalsList.filter(goal => goal.key === target.goal)[0]}
                    />
                ))}
            </Cards>
            <SubTitle> {<FormattedMessage id="v-targets.titleExpired" />}</SubTitle>
            <Cards>
                {targetsExpired.map((target, index) => (
                    <TargetCard
                        key={index}
                        target={target}
                        goal={goalsList.filter(goal => goal.key === target.goal)[0]}
                    />
                ))}
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
