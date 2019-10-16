import styled from "styled-components";

export const TargetContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 10% auto 10%;
    justify-items: stretch;
    padding: 5px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.h3`
    display: flex;
    grid-column-start: 1;
    grid-column-end: 1;
`;

export const FieldRight = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: right;
`;

export const FieldGrid = styled.div`
    margin: 5px;
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-template-columns: auto;
    height: calc(30vh - 10px);
`;
