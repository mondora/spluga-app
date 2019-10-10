import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 15% auto;
    padding: 5px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.div`
    display: flex;
    grid-column-start: 1;
    grid-column-end: 1;
    font-weight: bolder;
    font-size: 20px;
`;
