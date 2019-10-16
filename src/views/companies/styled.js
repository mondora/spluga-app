import styled from "styled-components";

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: auto;
    justify-items: stretch;
    padding: 10px;
`;

export const FieldLeft = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 10px;
`;

export const FieldRight = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    margin: 10px;
`;

export const FieldCenter = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    margin: 10px;
`;

export const FieldCenterFull = styled.div`
    grid-column-start: 1;
    grid-column-end: 6;
    margin: 10px;
`;

export const SpinContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;
