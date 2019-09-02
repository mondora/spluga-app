import React from "react";
import PropTypes from "prop-types";
import { FormContainer, ButtonContainer } from "./styled";
import { form } from "@mondora/conv-redux-form";
import { FormattedMessage } from "react-intl";
import { Button } from "antd";
import TextField from "@mondora/arc/antd/TextField";
import { inviteFormSchema } from "../../utils/form-schema/invite-form-schema";

export const InviteForm = ({ handleSubmit }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <TextField label={<FormattedMessage id="general.email" />} name={"email"} />
            <ButtonContainer>
                <Button htmlType="submit">
                    <FormattedMessage id="general.send" />
                </Button>
            </ButtonContainer>
        </FormContainer>
    );
};

InviteForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

const formDefinition = {
    form: "invite-form",
    schema: inviteFormSchema
};

export default form(formDefinition)(InviteForm);
