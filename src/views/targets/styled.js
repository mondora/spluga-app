import styled from "styled-components";

export const PageContainer = styled.div`
    display: grid;
    padding: 10px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: 10px;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    margin: 5px;
`;

export const Title = styled.h2``;

export const SubTitle = styled.h5``;

export const FieldRight = styled.span`
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: right;
`;
