import styled from "styled-components";
import * as Scroll from "react-scroll";
let Link = Scroll.Link;

export const PageContainer = styled.div`
    background-color: transparent;
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
    grid-template-rows: 30% 40% 30%;
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const RowContainer = styled.div`
    background-color: transparent;
    display: grid;
    grid-template-columns: auto;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

export const RowText = styled.h1`
    font-weight: 250;
    text-align: left;
    font-size: 50px;
    color: #fff;
`;

export const ImageContainer = styled.div`
    display: block;
    text-align: center;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
`;

export const Img = styled.img`
    width: 80%;
`;

export const RowLink = styled.div`
    display: block;
`;

export const LinkContainer = styled(Link)`
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    border-radius: 30px;

    &:hover {
        color: #000;
        background-color: #bbe5ed;
    }
`;
