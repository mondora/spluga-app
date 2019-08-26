import React, { useState } from "react";

import { Button, message, Steps, Progress } from "antd";

import StepInfo from "./stepInfo";
import StepStakeholder from "./stepStakeholder";
import StepGoal from "./stepGoal";
import StepType from "./stepType";
import StepPeriod from "./stepPeriod";
import StepSummary from "./stepSummary";
import { StepContent, StepAction } from "./styled";
import { FormattedMessage } from "react-intl";
import { translateMessage } from "../../i18n";

const { Step } = Steps;

/* 
INIT (IN VIEW): button -> redirect to "i miei obiettivi": (nel button Link component che mi linka a /targets (i miei obiettivi))
step-1: nome, descrizione
step-2: seleziono stakeholder
step-3: seleziono goal a cui si riferisce il target
step-4: target/limit value
step-5: periodo start/end date
step-6: riepilogo--> ok -> splugaResult


*/

//goals props passed ?

//export function for testing purpose
export const SplugaNewTarget = props => {
    const [currentStep, setCurrentStep] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stakeholder, setStakeholder] = useState("Environment");
    const [goal, setGoal] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [done, setDone] = useState(false);

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

    const handleSubmit = e => {
        e.preventDefault();
        //create target (addTarget)

        //check on user input
        if (name && description && startDate && endDate && value !== 0 && type) {
            //clean all form
            setName();
            setDescription();
            setStakeholder();
            setGoal();
            setType();
            setStartDate();
            setEndDate();
            //rendering progress bar

            message.success(translateMessage("c-splugaNewTarget.message.success"));
            setDone(true);
        } else {
            message.error(translateMessage("c-splugaNewTarget.message.error"));
        }
    };

    return (
        <React.Fragment>
            {done ? (
                <Progress
                    type="circle"
                    strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068"
                    }}
                    percent={value}
                />
            ) : (
                <form name="target-form" onSubmit={handleSubmit}>
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
            )}
        </React.Fragment>
    );
};

export default SplugaNewTarget;
