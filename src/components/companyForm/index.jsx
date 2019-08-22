import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { CompanyFormContainer, ButtonContainer } from "./styled";
import { form } from "@mondora/conv-redux-form";
import { FormattedMessage } from "react-intl";
import { Button } from "antd";
import TextField from "@mondora/arc/antd/TextField";
import { Upload, Icon } from "antd";
import { companyFormSchema } from "../../utils/form-schema/company-form-schema";

export const CompanyForm = ({ handleSubmit }) => {
    return (
        <Fragment>
            <CompanyFormContainer onSubmit={handleSubmit}>
                <TextField label={<FormattedMessage id="c-company-form.name" />} name={"name"} />
                <Upload
                    accept="image/*"
                    listType="picture-card"
                    beforeUpload={file => console.log(file)}
                    onRemove={file => console.log(file)}
                >
                    <Button>
                        <Icon type="upload" /> <FormattedMessage id="c-company-form.logo" />
                    </Button>
                </Upload>
                <ButtonContainer>
                    <Button color="blue" variant="primary" htmlType="submit">
                        <FormattedMessage id="general.save" />
                    </Button>
                </ButtonContainer>
            </CompanyFormContainer>
        </Fragment>
    );
};

CompanyForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

const formDefinition = {
    form: "company-form",
    schema: companyFormSchema
};

export default form(formDefinition)(CompanyForm);
