import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;
`;

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
`;

export const FieldRight = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: right;
`;

export const Title = styled.h2``;
