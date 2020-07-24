import styled from "styled-components";

export const Container = styled.div`
    grid-column-start: ${(props) => props.x + 1};
    grid-column-end: ${(props) => props.x + 2};
    grid-row-start: ${(props) => props.y + 1};
    grid-row-end: ${(props) => props.y + 2};
    position: relative;
`;

export const ColoredSquare = styled.div`
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.color};
    transform: ${(props) => `rotate(${props.rotation}deg)`};
    z-index: 1;
`;

export const Tooltip = styled.div`
    display:${(props) => (props.isVisible ? "block" : "none")};
    width: 160px;
    min-height: 40px;
    background-color: ${(props) => props.color};
    border: 2px solid black
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-left: -80px;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -8px;
        border-width: 8px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
`;
