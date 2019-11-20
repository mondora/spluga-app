import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: #222;
    color: #fff;
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const TextContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
`;

export const LinkContainer = styled.a`
    grid-column-start: 2;
    color: #fff;
    padding: 5px;
    border-radius: 30px;
    &:hover {
        color: #bbe5ed;
    }
`;
