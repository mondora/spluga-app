import React from "react";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import { Container, Fields, Error, Form, Input, Label, Button, Title } from "./styled";

export const SplugaForm = ({ title, fields, onSubmit, serverError }) => {
    const { register, handleSubmit, errors } = useForm();

    const input = field => {
        if (field.type === "select") {
            return (
                <select name={field.name} value="ddd">
                    {field.list.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
        } else {
            return <Input name={field.name} ref={register(field.ref)} type={field.type} autocomplete="off" />;
        }
    };

    return (
        <Container>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                {fields.map(field => (
                    <Fields key={field.name}>
                        <Label htmlFor={field.name}>{field.description}</Label>
                        {input(field)}
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
