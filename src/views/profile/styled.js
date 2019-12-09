import styled from "styled-components";

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    padding: 10px;
    width: 100%;
`;

export const FieldLeft = styled.div`
    grid-column: 1/3;
    margin: 10px;
`;

export const FieldRight = styled.div`
    grid-column: 3/6;
    margin: 10px;
`;

export const FieldCenter = styled.div`
    grid-column: 1/6;
    margin: 10px;
`;

export const SpinContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;
