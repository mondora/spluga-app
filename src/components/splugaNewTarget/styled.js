import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    padding: 15px;
    margin-top: 5px;
    height: 50%;
`;

export const StepAction = styled.div`
    text-align: left;
    margin-top: 30px;
`;

export const StepIntroContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const StepActionButton = styled.div`
    text-align: right;
`;

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 20% auto auto 20%;
    margin-bottom: 30px;
`;

export const GridTitle = styled.div`
    font-weight: bold;
    grid-column-start: 2;
    grid-column-end: 3;
`;
export const GridValue = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: right;
`;

export const Img = styled.img`
    width: 30%;
    opacity: 0.2;
`;
