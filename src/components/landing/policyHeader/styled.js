import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: transparent;
    display: grid;
    grid-template-columns: 10% auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background: url("https://spluga.io/img/bg-pattern.png"), #986c6a;
    background: url("https://spluga.io/img/bg-pattern.png"),
        -webkit-gradient(linear, right top, left top, from(#986c6a), to(#bfbccb));
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #986c6a, #bfbccb);
`;

export const RowContainer = styled.div`
    background-color: transparent;
    grid-column-start: 2;
    grid-column-end: 3;
`;

export const RowText = styled.h1`
    font-weight: 250;
    text-align: left;
    font-size: 40px;
    color: #fff;
`;

export const ImageContainer = styled.div`
    display: block;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 1;
`;

export const Img = styled.img`
    width: 40%;
`;
