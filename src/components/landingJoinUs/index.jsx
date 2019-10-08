import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { form } from "@mondora/conv-redux-form";
import { PageContainer, Title, Desc, FormContainer } from "./styled";
import TextField from "@mondora/arc/antd/TextField";
import { Button } from "antd";
import { joinUsFormSchema } from "../../utils/form-schema/join-us-form-schema";
export const LandingJoinUs = ({ handleSubmit }) => {
    return (
        <Fragment>
            <PageContainer>
                <Title>
                    <FormattedMessage id="general.joinUs" />
                </Title>
                <Desc>
                    <FormattedMessage id="c-landingJoinUs.desc" />
                </Desc>
                <FormContainer>
                    <TextField name={"email"} />
                </FormContainer>
                <FormContainer>
                    <Button htmlType="submit">
                        <FormattedMessage id="general.send" />
                    </Button>
                </FormContainer>
            </PageContainer>
        </Fragment>
    );
};

LandingJoinUs.propTypes = {
    handleSubmit: PropTypes.func
};

const formDefinition = {
    form: "join-us-form",
    schema: joinUsFormSchema
};

export default form(formDefinition)(LandingJoinUs);
