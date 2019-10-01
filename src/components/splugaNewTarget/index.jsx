import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Steps } from "antd";
import { targetFormSchema } from "../../utils/form-schema/target-form-schema";
import { form } from "@mondora/conv-redux-form";

import StepInfo from "./stepInfo";
import StepStakeholder from "./stepStakeholder";
import StepGoal from "./stepGoal";
import StepPeriod from "./stepPeriod";
import StepSummary from "./stepSummary";
import { StepContent, StepAction } from "./styled";
import { FormattedMessage } from "react-intl";

const { Step } = Steps;

export const SplugaNewTarget = ({ handleSubmit }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [target, setTarget] = useState({});

    const steps = [
        {
            key: 0,
            content: <StepInfo onChange={setTarget} target={target} />,
            nextDisabled: !target.name || !target.description
        },
        {
            key: 1,
            content: <StepStakeholder onChange={setTarget} target={target} />,
            nextDisabled: !target.stakeholder
        },
        {
            key: 2,
            content: <StepGoal onChange={setTarget} target={target} />,
            nextDisabled: !target.goal || !target.value
        },
        {
            key: 3,
            content: <StepPeriod onChange={setTarget} target={target} />,
            nextDisabled: !target.startDate || !target.endDate
        },
        {
            key: 4,
            content: <StepSummary target={target} />
        }
    ];

    const _next = () => {
        currentStep >= 3 ? setCurrentStep(4) : setCurrentStep(currentStep + 1);
    };

    const _prev = () => {
        currentStep <= 0 ? setCurrentStep(0) : setCurrentStep(currentStep - 1);
    };

    return (
        <React.Fragment>
            <form name="targetForm" onSubmit={handleSubmit}>
                <Steps current={currentStep}>
                    {steps.map(item => (
                        <Step key={item.key} title={item.title} />
                    ))}
                </Steps>
                <StepContent>
                    {" "}
                    {steps[currentStep].content}
                    <StepAction>
                        {currentStep < steps.length - 1 && (
                            <Button type="primary" onClick={_next} disabled={steps[currentStep].nextDisabled}>
                                <FormattedMessage id="general.next" />
                            </Button>
                        )}
                        {currentStep === steps.length - 1 && (
                            <Button.Group>
                                <Button type="primary" htmlType="submit">
                                    <FormattedMessage id="general.done" />
                                </Button>
                                <Button type="danger" onClick={() => setCurrentStep(0)}>
                                    <FormattedMessage id="general.reject" />
                                </Button>
                            </Button.Group>
                        )}
                        {currentStep > 0 && (
                            <Button style={{ marginLeft: 8 }} onClick={_prev}>
                                <FormattedMessage id="general.previous" />
                            </Button>
                        )}
                    </StepAction>
                </StepContent>
            </form>
        </React.Fragment>
    );
};

SplugaNewTarget.propTypes = {
    handleSubmit: PropTypes.func
};

const formDefinition = {
    form: "targetForm",
    schema: targetFormSchema
};

export default form(formDefinition)(SplugaNewTarget);
