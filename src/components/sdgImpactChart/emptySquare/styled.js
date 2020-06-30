import styled from "styled-components";

export const Container = styled.div`  
    grid-column-start: ${(props) => props.x + 1}
    grid-column-end: ${(props) => props.x + 2}
    grid-row-start: ${(props) => props.y + 1}
    grid-row-end: ${(props) => props.y + 2}
    position: relative;
    width: 16px;
    height: 16px;
    background-color: #f1f1f1;
    z-index: 1;
`;
