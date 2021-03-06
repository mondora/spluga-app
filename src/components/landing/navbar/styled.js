import styled from "styled-components";
import * as Scroll from "react-scroll";
let Link = Scroll.Link;

export const PageContainer = styled.div`
    background-color: #fff;
    letter-spacing: 1px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    position: sticky;
    top: 0;
    border-bottom: 3px solid #bfbccb;
`;

export const LinkContainer = styled(Link)`
    padding: 2px;
    font-weight: bold;
    color: #000;
    &:hover {
        color: #000;
    }
`;

export const LinkGroupContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

export const LinkLoginContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: right;
`;
