import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon, SideBarContainer, Label, ItemContainer } from "./styled";

// export const SideBarItems = [{
//     icon:
// }];

const SideBarItem = ({ icon, label }) => {
    return (
        <ItemContainer>
            <Icon name="targets" />
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
                    <Label>{"Profile"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/companies" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon name="company" />
                    <Label>{"Company"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/targets" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon name="targets" />
                    <Label>{"Targets"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/activities" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon name="activities" />
                    <Label>{"Activities"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/apps" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon name="apps" />
                    <Label>{"Apps"}</Label>
                </ItemContainer>
            </Link>

            <Link to="/sdgs" style={{ color: "white" }}>
                <ItemContainer>
                    <Icon name="SDGs" />
                    <Label>{"SDGs"}</Label>
                </ItemContainer>
            </Link>
        </SideBarContainer>
    );
};

SideBar.propTypes = {
    currentPage: PropTypes.string,
};

export default SideBar;
