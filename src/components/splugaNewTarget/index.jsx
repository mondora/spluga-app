import React, { useState } from "react";
import { Button, message, Steps } from "antd";

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
-DEFINE PROPTYPES
-add tests
-button done

*/

//goals props passed ?
const SplugaNewTarget = props => {
    const [currentStep, setCurrentStep] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stakeholder, setStakeholder] = useState("Environment");
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

    const _next = () => {
        currentStep >= 4 ? setCurrentStep(5) : setCurrentStep(currentStep + 1);
    };

    const _prev = () => {
        currentStep <= 0 ? setCurrentStep(0) : setCurrentStep(currentStep - 1);
    };

    return (
        <React.Fragment>
            <form>
                <Steps current={currentStep}>
                    {steps.map(item => (
                        <Step key={item.key} title={item.title} />
                    ))}
                </Steps>
                <StepContent>{steps[currentStep].content}</StepContent>
                <StepAction>
                    {currentStep < steps.length - 1 && (
                        <Button type="primary" onClick={_next}>
                            Next
                        </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Button.Group>
                            <Button
                                type="primary"
                                onClick={() => message.success(`Processing complete! Your target has been saved`)}
                            >
                                Done
                            </Button>
                            <Button type="danger" onClick={() => setCurrentStep(0)}>
                                Reject
                            </Button>
                        </Button.Group>
                    )}
                    {currentStep > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={_prev}>
                            Previous
                        </Button>
                    )}
                </StepAction>
            </form>
        </React.Fragment>
    );
};

export default SplugaNewTarget;
