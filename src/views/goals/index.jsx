import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getGoals, addGoal } from "../../actions/goals";

import { PageContainer, Title } from "./styled";

import SplugaTable from "../../components/splugaTable";
import SplugaForm from "../../components/splugaForm";
import SplugaResult from "../../components/splugaResult";

export const Goals = ({ auth, goals, goal, getGoalsStatus, getGoals, addGoal }) => {
    useEffect(() => {
        if (!getGoalsStatus.ended && !getGoalsStatus.started) {
            getGoals();
        }
    }, [getGoals, getGoalsStatus]);

    const onChange = () => {
        console.log("onChange");
    };

    const onSubmit = data => {
        const ownerId = auth.currentUser.id;
        addGoal(ownerId, data);
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
        },
        {
            name: "description",
            description: "Description",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        },
        {
            name: "uom",
            description: "Unit of Measure",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        }
    ];

    return goal ? (
        <PageContainer>
            <Title>Goals</Title>
            <SplugaResult title={"New Goal created"} />
        </PageContainer>
    ) : (
        <PageContainer>
            <Title>Goals</Title>
            <SplugaTable
                dataSourceName="goals"
                dataSource={goals}
                onChange={x => onChange(x)}
                loadingStatus={getGoalsStatus}
            />
            <SplugaForm title="Create Goals" fields={fields} serverError={serverError} onSubmit={x => onSubmit(x)} />
        </PageContainer>
    );
};

Goals.propTypes = {
    auth: PropTypes.object.isRequired,
    goals: PropTypes.array,
    goal: PropTypes.object,
    getGoalsStatus: PropTypes.object,
    getGoals: PropTypes.func,
    addGoal: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    goals: state.getGoals.goals,
    goal: state.addGoal.goal,
    getGoalsStatus: state.getGoals.status
});

export default connect(
    mapStateToProps,
    { getGoals, addGoal }
)(Goals);
