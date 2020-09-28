import styled, { css } from "styled-components";

import SidebarIcon from "./sidebar-icon/index";

export const SideBarContainer = styled.div`
    position: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    background-color: #000000;
    color: #ffffff;
`;

export const Icon = styled(SidebarIcon)`
    width: 18px;
    height: 18px;
    fill: white;
    margin: 4px;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;

    &:active,
    &:focus,
    &:hover {
        filter: brightness(0.5);
    }

    ${(props) =>
        props.clicked &&
        css`
            filter: brightness(0.5);
        `}
`;

export const Label = styled.div``;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
`;
