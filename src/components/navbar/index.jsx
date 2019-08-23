//utilizzo menu antd con le 4 opzioni che mi rendeizzano ai 4 componenti 1 view root
import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PageContainer } from "./styled";
import { FormattedMessage } from "react-intl";

export const NavBar = ({ currentPage }) => {
    return (
        <PageContainer>
            <Menu selectedKeys={[currentPage]} mode="inline">
                <Menu.Item key="profile">
                    <Link to="/">
                        <Icon type="user" />
                        <FormattedMessage id="navbar.profile" />
                    </Link>
                </Menu.Item>
                <Menu.Item key="companies">
                    <Link to="/companies">
                        <Icon type="team" />
                        <FormattedMessage id="navbar.company" />
                    </Link>
                </Menu.Item>
                <Menu.Item key="apps">
                    <Link to="/apps">
                        <Icon type="api" />
                        <FormattedMessage id="navbar.app" />
                    </Link>
                </Menu.Item>
                <Menu.Item key="goals">
                    <Link to="/goals">
                        <Icon type="heart" />
                        Goals
                    </Link>
                </Menu.Item>
                <Menu.Item key="targets">
                    <Link to="/targets">
                        <Icon type="line-chart" />
                        Targets
                    </Link>
                </Menu.Item>
                <Menu.Item key="activities">
                    <Link to="/activities">
                        <Icon type="rise" />
                        <FormattedMessage id="navbar.activities" />
                    </Link>
                </Menu.Item>
            </Menu>
        </PageContainer>
    );
};

NavBar.propTypes = {
    currentPage: PropTypes.string
};

export default NavBar;
