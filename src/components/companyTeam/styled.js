import styled from "styled-components";

export const CompanyTeamContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    justify-items: stretch;
    padding: 10px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
`;

export const Title = styled.div`
    font-weight: bolder;
    font-size: 20px;
`;

export const FieldLeft = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    margin: 10px;
`;

export const FieldRight = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    margin: 10px;
    text-align: right;
`;
