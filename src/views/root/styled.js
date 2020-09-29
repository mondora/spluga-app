import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: absolute;

    /** for positioning content after sidebar */
    left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
`;

export const Page = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
