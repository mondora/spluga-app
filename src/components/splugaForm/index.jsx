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

export const SplugaForm = ({ title, fields, onSubmit, serverError }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(field => (
          <Fields>
            <Label htmlFor={field.name}>{field.description}</Label>
            <Input name={field.name} ref={register(field.ref)} />
            <Error>{errors[field.name] && errors[field.name].message}</Error>
          </Fields>
        ))}
        <Fields>
          <Button type="submit">Create</Button>
        </Fields>
        <Error>{serverError}</Error>
      </Form>
    </Container>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
  onSubmit: PropTypes.func,
  serverError: PropTypes.string
};

export default SplugaForm;
