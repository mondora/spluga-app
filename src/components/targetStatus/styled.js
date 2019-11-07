import styled from "styled-components";

export const UserTeamContainer = styled.div`
    display: grid;
    height: calc(1vh - 1px);
    grid-template-columns: 60px auto;
    grid-template-rows: auto auto;
`;

export const AvatarContainer = styled.div`
    align-self: start;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
`;

export const NameContainer = styled.div`
    padding-left: 3px;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
`;
export const RoleContainer = styled.div`
    padding-left: 3px;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
`;
