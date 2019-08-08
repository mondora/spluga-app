import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTargets, addTarget } from "../../actions/targets";

import { PageContainer, Title } from "./styled";

import SplugaTable from "../../components/splugaTable";
import SplugaForm from "../../components/splugaForm";
import SplugaResult from "../../components/splugaResult";

export const Targets = ({ auth, targets, target, getTargetsStatus, getTargets, addTarget }) => {
    useEffect(() => {
        if (!getTargetsStatus.ended && !getTargetsStatus.started) {
            getTargets();
        }
    }, [getTargets, getTargetsStatus]);

    const onChange = () => {
        console.log("onChange");
    };

    const onSubmit = data => {
        const ownerId = auth.currentUser.id;
        console.log({ data });
        addTarget(ownerId, data);
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
            name: "stakeholder",
            description: "Stakeholder",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            },
            type: "select",
            list: ["Environment", "Community", "Workers", "Governance", "Customer"]
        },
        {
            name: "company",
            description: "Company",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        },
        {
            name: "goal",
            description: "Goal",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            }
        },
        {
            name: "limit",
            description: "Limit",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            },
            type: "number"
        },
        {
            name: "startDate",
            description: "Start Date",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            },
            type: "date"
        },
        {
            name: "endDate",
            description: "End Date",
            ref: {
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
            },
            type: "date"
        }
    ];

    return target ? (
        <PageContainer>
            <Title>Targets</Title>
            <SplugaResult title={"New Target created"} />
        </PageContainer>
    ) : (
        <PageContainer>
            <Title>Targets</Title>
            <SplugaTable
                dataSourceName="targets"
                dataSource={targets}
                onChange={x => onChange(x)}
                loadingStatus={getTargetsStatus}
            />
            <SplugaForm title="Create Targets" fields={fields} serverError={serverError} onSubmit={x => onSubmit(x)} />
        </PageContainer>
    );
};

Targets.propTypes = {
    auth: PropTypes.object.isRequired,
    targets: PropTypes.array,
    target: PropTypes.object,
    getTargets: PropTypes.func,
    getTargetsStatus: PropTypes.object,
    addTarget: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    targets: state.getTargets.targets,
    target: state.addTarget.target,
    getTargetsStatus: state.addTarget.status
});

export default connect(
    mapStateToProps,
    { getTargets, addTarget }
)(Targets);
