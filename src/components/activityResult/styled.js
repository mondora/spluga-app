import styled from "styled-components";

export const Container = styled.form`
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 15% auto;
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
    grid-column-start: 3;
    grid-column-end: 4;
`;

export const FieldCenter = styled.div`
    padding-top: 15px;
    grid-column-start: 1;
    grid-column-end: 4;
    height: calc(30vh - 10px);
    font-size: 13px;
`;

export const SpinContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;
