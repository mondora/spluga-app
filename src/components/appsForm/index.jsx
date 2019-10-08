import React from "react";
import PropTypes from "prop-types";
import TextField from "@mondora/arc/antd/TextField";
import { FormContainer, Fields, Error, Button, Title } from "./styled";
import { FormattedMessage } from "react-intl";
import { appsFormSchema } from "../../utils/form-schema/apps-form-schema";
import { form } from "@mondora/conv-redux-form";

export const AppsForm = ({ handleSubmit, serverError }) => {
    return (
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
            <Title>
                <FormattedMessage id={"v-apps.create.title"} />
            </Title>
            <TextField label={<FormattedMessage id="general.name" />} name={"name"} />
            <Fields>
                <Button htmlType="submit">
                    <FormattedMessage id="general.create" />
                </Button>
            </Fields>
            <Error>{serverError}</Error>
        </FormContainer>
    );
};

AppsForm.propTypes = {
    handleSubmit: PropTypes.func,
    serverError: PropTypes.string
};

const formDefinition = {
    form: "apps-form",
    schema: appsFormSchema
};

export default form(formDefinition)(AppsForm);
