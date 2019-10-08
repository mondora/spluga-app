import React from "react";
import PropTypes from "prop-types";
import TextField from "@mondora/arc/antd/TextField";
import { FormContainer, Fields, Error, Button, Title } from "./styled";
import { FormattedMessage } from "react-intl";
import { appFormSchema } from "../../utils/form-schema/app-form-schema";
import { form } from "@mondora/conv-redux-form";

export const AppForm = ({ handleSubmit, serverError }) => {
    return (
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
            <Title>
                <FormattedMessage id={"v-app.create.title"} />
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

AppForm.propTypes = {
    handleSubmit: PropTypes.func,
    serverError: PropTypes.string
};

const formDefinition = {
    form: "app-form",
    schema: appFormSchema
};

export default form(formDefinition)(AppForm);
