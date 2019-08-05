import React from "react";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import {
  Container,
  Fields,
  Error,
  Form,
  Input,
  Label,
  Button,
  Title
} from "./styled";

export const FormApp = ({ onSubmit, serverError }) => {
  const { register, handleSubmit, errors } = useForm();

  const appNameRef = {
    required: "this is required",
    minLength: {
      value: 2,
      message: "Min length is 2"
    }
  };

  return (
    <Container>
      <Title>Create App</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields>
          <Label htmlFor="appName">App Name</Label>
          <Input name="appName" ref={register(appNameRef)} />
          <Error>{errors.appName && errors.appName.message}</Error>
        </Fields>
        <Fields>
          <Button type="submit">Create</Button>
        </Fields>
        <Error>{serverError}</Error>
      </Form>
    </Container>
  );
};

Container.propTypes = {
  dataSource: PropTypes.array,
  onSubmit: PropTypes.func
};

export default FormApp;
