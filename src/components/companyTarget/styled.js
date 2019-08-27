import styled from "styled-components";

export const TargetContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto;
    justify-items: stretch;
    padding: 10px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.div`
    font-weight: bolder;
    font-size: 20px;
`;

export const FieldLeft = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    margin: 10px;
`;

export const FieldRight = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-column-start: 5;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 5;
    margin: 10px;
    text-align: right;
`;
