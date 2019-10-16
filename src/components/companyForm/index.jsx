import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, ButtonContainer, Title, UploadContainer } from "./styled";
import { form } from "@mondora/conv-redux-form";
import { FormattedMessage } from "react-intl";
import { Button } from "antd";
import TextField from "@mondora/arc/antd/TextField";
import { Upload, Icon } from "antd";
import { companyFormSchema } from "../../utils/form-schema/company-form-schema";

export const CompanyForm = ({ handleSubmit, onSelectFile }) => {
    const handleSelectFile = file => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = evt => {
            const fileContent = evt.target.result;
            const base64 = fileContent.split(",")[1];
            onSelectFile(base64);
        };
    };
    return (
        <Fragment>
            <Container onSubmit={handleSubmit}>
                <Title>
                    <FormattedMessage id="c-companyForm.title" />
                </Title>
                <TextField label={<FormattedMessage id="general.name" />} name={"name"} />
                <UploadContainer>
                    <Upload
                        accept="image/*"
                        listType="picture-card"
                        id={"logo"}
                        beforeUpload={file => handleSelectFile(file)}
                        onRemove={file => console.log(file)}
                    >
                        <Button>
                            <Icon type="upload" /> <FormattedMessage id="c-companyForm.logo" />
                        </Button>
                    </Upload>
                </UploadContainer>

                <ButtonContainer>
                    <Button htmlType="submit">
                        <FormattedMessage id="general.save" />
                    </Button>
                </ButtonContainer>
            </Container>
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
