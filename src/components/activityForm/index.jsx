import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import SyntaxHighlighter from "react-syntax-highlighter";

import {
    FormContainer,
    ButtonContainer,
    Title,
    FieldContainer,
    Desc,
    Unordered,
    Element,
    AppTutprial,
    Result,
    ResultTitle,
} from "./styled";
import { form } from "@mondora/conv-redux-form";
import { FormattedMessage } from "react-intl";
import { Button } from "antd";
import ISO8601DayField from "@mondora/arc/antd/ISO8601DayField";
import NumberField from "@mondora/arc/antd/NumberField";
import { SelectStringField } from "@mondora/arc/antd/SelectField";
import TextAreaField from "@mondora/arc/antd/TextAreaField";

import { activityFormSchema } from "../../utils/form-schema/activity-form-schema";

export const ActivityForm = ({ handleSubmit, goals, result }) => {
    var options = [];
    if (goals) {
        goals.forEach((goal) => {
            options.push({ value: goal.key, label: <FormattedMessage id={"general.goals." + goal.key} /> });
        });
    }

    const disabledDate = (current) => {
        return current && current > moment().endOf("day");
    };

    if (result) {
        result.forEach((r) => {
            const goal = goals.find((g) => g.key === r.goal);
            r.unit = goal.unit;
        });
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>
                <FormattedMessage id="c-activityForm.title" />
            </Title>
            <Desc>
                <FormattedMessage id="c-activityForm.desc" />
            </Desc>
            <FieldContainer>
                <SelectStringField label="goal" name="goal" options={options} placeholder="Goal" />
                <NumberField label={<FormattedMessage id="general.value" />} name="value" placeholder="0" />
                <TextAreaField label={<FormattedMessage id="general.description" />} name="description" />
                <ISO8601DayField
                    label={<FormattedMessage id="general.date" />}
                    name="date"
                    disabledDate={disabledDate}
                />
            </FieldContainer>
            <ButtonContainer>
                <Button htmlType="submit">
                    <FormattedMessage id="general.save" />
                </Button>
            </ButtonContainer>

            <ResultTitle>{result ? <FormattedMessage id="c-activityForm.result.congratulation" /> : null}</ResultTitle>
            <Result>
                {result ? <FormattedMessage id="c-activityForm.result.message" /> : null}
                <ul>
                    {result ? result.map((r) => <li key={r.goal}>{r.goal + ":" + r.value + " " + r.unit}</li>) : null}
                </ul>
            </Result>
            <AppTutprial>
                <FormattedMessage id="c-activityForm.desc2" />
                <Unordered>
                    <Element>
                        <FormattedMessage id="c-activityForm.createAppDesc" />
                    </Element>
                    <Element>
                        <FormattedMessage id="c-activityForm.useAppDesc" />
                        <SyntaxHighlighter language="javascript">
                            {"import a from 'a'; \n // Code exaple to use app"}
                        </SyntaxHighlighter>
                    </Element>
                </Unordered>
            </AppTutprial>
        </FormContainer>
    );
};

ActivityForm.propTypes = {
    handleSubmit: PropTypes.func,
    result: PropTypes.array,
};

const formDefinition = {
    form: "activity-form",
    schema: activityFormSchema,
};

export default form(formDefinition)(ActivityForm);
