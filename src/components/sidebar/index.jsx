import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon, SideBarContainer, Label, ItemContainer } from "./styled";
import { PROFILE, COMPANIES, TARGETS, ACTIVITIES, APPS, SDGs } from "../../constants/routes";
import { FormattedMessage } from "react-intl";

export const sideBarItems = [
    {
        name: "",
        labelId: "c-navbar.profile",
        urlLink: PROFILE,
    },
    {
        name: "company",
        labelId: "c-navbar.company",
        urlLink: COMPANIES,
    },
    {
        name: "targets",
        labelId: "c-navbar.targets",
        urlLink: TARGETS,
    },
    {
        name: "activities",
        labelId: "c-navbar.activities",
        urlLink: ACTIVITIES,
    },
    {
        name: "apps",
        labelId: "c-navbar.app",
        urlLink: APPS,
    },
    {
        name: "SDGs",
        labelId: "c-navbar.sdgs",
        urlLink: SDGs,
    },
];

export const SideBarItem = ({ currentPage, name, labelId, urlLink }) => {
    return (
        <ItemContainer clicked={currentPage === urlLink}>
            <Icon name={name} />
            <Label>
                <FormattedMessage id={labelId} />
            </Label>
        </ItemContainer>
    );
};

SideBarItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string,
};

const SideBar = ({ currentPage }) => {
    return (
        <SideBarContainer>
            <img src="https://spluga.io/img/spluga-logo-white.png" alt="spluga" width={140} style={{ margin: "8px" }} />

            {sideBarItems.map((sidebarItem) => (
                <Link to={sidebarItem.urlLink} style={{ color: "white" }}>
                    <SideBarItem
                        currentPage={currentPage}
                        name={sidebarItem.name}
                        labelId={sidebarItem.labelId}
                        urlLink={sidebarItem.urlLink}
                    />
                </Link>
            ))}
        </SideBarContainer>
    );
};

SideBar.propTypes = {
    currentPage: PropTypes.string,
};

export default SideBar;
