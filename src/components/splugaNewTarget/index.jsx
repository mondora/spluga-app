import React, { useState } from "react";
import { Steps } from "antd";

import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Step6 from "./step-6";
import { StepContent, StepAction } from "./styled";

const { Step } = Steps;

/* 
INIT (IN VIEW): button -> redirect to "i miei obiettivi": (nel button Link component che mi linka a /targets (i miei obiettivi))
step-1: nome, descrizione
step-2: seleziono stakeholder
step-3: seleziono goal a cui si riferisce il target
step-4: target/limit value
step-5: periodo start/end date
step-6: riepilogo--> ok -> splugaResult


TODO: 
-antd
-DEFINE PROPTYPES
-add tests

*/

//goals props passed ?
const SplugaNewTarget = props => {
    const [currentStep, setCurrentStep] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stakeholder, setStakeholder] = useState("environment");
    const [goal, setGoal] = useState("");
    const [type, setType] = useState("");
    const [targetOrLimitValue, setTargetOrLimitValue] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const steps = [
        {
            key: 0,
            title: "",
            content: (
                <Step1
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
            content: <Step2 onStakeholderChange={setStakeholder} stakeholder={stakeholder} />
        },
        {
            key: 2,
            title: "",
            content: <Step3 onGoalChange={setGoal} goal={goal} />
        },
        {
            key: 3,
            title: "",
            content: (
                <Step4
                    onTargetOrLimitValueChange={setTargetOrLimitValue}
                    onTypeChange={setType}
                    targetOrLimitValue={targetOrLimitValue}
                    type={type}
                />
            )
        },
        {
            key: 4,
            title: "",
            content: <Step5 onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
        },
        {
            key: 5,
            title: "",
            content: (
                <Step6
                    name={name}
                    description={description}
                    stakeholder={stakeholder}
                    goal={goal}
                    targetOrLimitValue={targetOrLimitValue}
                    startDate={startDate}
                    endDate={endDate}
                />
            )
        }
    ];

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your registration detail: \n 
            name: ${name} \n 
             Description: ${description} \n
             Stakeholder: ${stakeholder} \n
            targetOrLimit: ${type} \n
             targetOrLimitValue : ${targetOrLimitValue} \n
             Goal: ${goal}\n
             startDate : ${startDate} \n
             endDate : ${endDate} \n
             `);
    };

    const _next = () => {
        currentStep >= 4 ? setCurrentStep(5) : setCurrentStep(currentStep + 1);
    };

    const _prev = () => {
        currentStep <= 0 ? setCurrentStep(0) : setCurrentStep(currentStep - 1);
    };

    /*
     * the functions for buttons steps
     */
    const previousButton = () => {
        if (currentStep !== 0) {
            return (
                <button type="button" onClick={_prev}>
                    Previous
                </button>
            );
        }
        return null;
    };

    const nextButton = () => {
        if (currentStep < 5) {
            return (
                <button type="button" onClick={_next}>
                    Next
                </button>
            );
        }
        return null;
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Steps current={currentStep}>
                    {steps.map(item => (
                        <Step key={item.key} title={item.title} />
                    ))}
                </Steps>
                <StepContent>{steps[currentStep].content}</StepContent>
                <StepAction>
                    {previousButton()}
                    {nextButton()}
                </StepAction>
            </form>
        </React.Fragment>
    );
};

export default SplugaNewTarget;
