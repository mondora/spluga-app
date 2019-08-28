import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Steps } from "antd";
import { targetFormSchema } from "../../utils/form-schema/target-form-schema";
import { form } from "@mondora/conv-redux-form";

import StepInfo from "./stepInfo";
import StepStakeholder from "./stepStakeholder";
import StepGoal from "./stepGoal";
import StepType from "./stepType";
import StepPeriod from "./stepPeriod";
import StepSummary from "./stepSummary";
import { StepContent, StepAction } from "./styled";
import { FormattedMessage } from "react-intl";

const { Step } = Steps;

/* 

INIT (IN VIEW): button -> redirect to "i miei obiettivi": (nel button Link component che mi linka a /targets (i miei obiettivi))
step-1: nome, descrizione
step-2: seleziono stakeholder
step-3: seleziono goal a cui si riferisce il target
step-4: target/limit value
step-5: periodo start/end date
step-6: riepilogo--> ok -> splugaResult


TODO: fix test

*/

//goals props passed ?

//export function for testing purpose
export const SplugaNewTarget = ({ handleSubmit }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stakeholder, setStakeholder] = useState("Environment");
    const [goal, setGoal] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const steps = [
        {
            key: 0,
            title: "",
            content: (
                <StepInfo
                    onNameChange={setName}
                    onDescriptionChange={setDescription}
                    name={name}
                    description={description}
                />
            )
        },
        {
            key: 1,
            title: "",
            content: <StepStakeholder onStakeholderChange={setStakeholder} stakeholder={stakeholder} />
        },
        {
            key: 2,
            title: "",
            content: <StepGoal onGoalChange={setGoal} goal={goal} />
        },
        {
            key: 3,
            title: "",
            content: <StepType onValueChange={setValue} onTypeChange={setType} value={value} type={type} />
        },
        {
            key: 4,
            title: "",
            content: <StepPeriod onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
        },
        {
            key: 5,
            title: "",
            content: (
                <StepSummary
                    form={targetFormSchema}
                    name={name}
                    description={description}
                    stakeholder={stakeholder}
                    goal={goal}
                    value={value}
                    startDate={startDate}
                    endDate={endDate}
                />
            )
        }
    ];

    const _next = () => {
        currentStep >= 4 ? setCurrentStep(5) : setCurrentStep(currentStep + 1);
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
                <StepContent> {steps[currentStep].content} </StepContent>
                <StepAction>
                    {currentStep < steps.length - 1 && (
                        <Button type="primary" onClick={_next}>
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
