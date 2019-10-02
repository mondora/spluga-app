import styled from "styled-components";

export const TargetContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 15% auto;
    justify-items: stretch;
    padding: 5px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.div`
    display: flex;
    grid-column-start: 1;
    grid-column-end: 1;
    font-weight: bolder;
    font-size: 20px;
`;

export const FieldRight = styled.div`
    grid-column-start: 4;
    grid-column-end: 5;
    text-align: right;
    font-weight: bolder;
`;
