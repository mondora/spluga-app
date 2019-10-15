import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    border: 3px solid #bfbccb;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto auto auto auto;
    border-radius: 8px;
    padding: 15px;
`;

export const Title = styled.div`
    font-weight: bolder;
    font-size: 20px;
    grid-column-start: 1;
    grid-column-end: 2;
`;

export const Desc = styled.div`
    padding-top: 20px;
    font-size: 15px;
    grid-column-start: 1;
    grid-column-end: 2;
`;

export const ResultTitle = styled.div`
    padding-left: 20px;
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
`;

export const Result = styled.div`
    padding-left: 20px;
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
`;

export const AppTutprial = styled.div`
    padding-top: 20px;
    font-size: 15px;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const FieldContainer = styled.div`
    padding: 3px;
    grid-column-start: 1;
    grid-column-end: 1;
`;

export const Unordered = styled.ul``;

export const Element = styled.li``;

export const ButtonContainer = styled.div`
    padding: 3px;
    text-align: right;
    grid-column-start: 1;
    grid-column-end: 1;
`;
