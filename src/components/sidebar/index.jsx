import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as TargetIcon } from "./assets/award.svg";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    background-color: #000000;
    color: #ffffff;
`;

const Icon = styled(TargetIcon)`
    width: 18px;
    height: 18px;
    fill: white;
    margin: 4px;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
`;

const Label = styled.div``;

const SideBarItem = ({ icon, label }) => {
    return (
        <ItemContainer>
            <Icon />
            <Label>{"Targets"}</Label>
        </ItemContainer>
    );
};

SideBarItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
};

const SideBar = ({ currentPage }) => {
    return (
        <SideBarContainer>
            <img src="https://spluga.io/img/spluga-logo-white.png" alt="spluga" width={140} style={{ margin: "8px" }} />
            <Link to="/" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/companies" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/targets" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/activities" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/apps" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/sdgs" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>
        </SideBarContainer>
    );
};

SideBar.propTypes = {
    currentPage: PropTypes.string,
};

export default SideBar;
