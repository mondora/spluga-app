//utilizzo menu antd con le 4 opzioni che mi rendeizzano ai 4 componenti 1 view root
import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PageContainer } from "./styled";

export const NavBar = ({ currentPage }) => {
	return (
		<PageContainer>
			<Menu selectedKeys={[currentPage]} mode="inline">
				<Menu.Item key="home">
					<Link to="/">
						<Icon type="home" />
						Home
					</Link>
				</Menu.Item>
				<Menu.Item key="companies">
					<Link to="/companies">
						<Icon type="team" />
						Company
					</Link>
				</Menu.Item>
				<Menu.Item key="targets">
					<Link to="/targets">
						<Icon type="line-chart" />
						Targets
					</Link>
				</Menu.Item>
				<Menu.Item key="goals">
					<Link to="/goals">
						<Icon type="heart" />
						Goals
					</Link>
				</Menu.Item>
				<Menu.Item key="activities">
					<Link to="/activities">
						<Icon type="rise" />
						Activities
					</Link>
				</Menu.Item>
			</Menu>
		</PageContainer>
	);
};

NavBar.propTypes = {
	currentPage: PropTypes.object
};

export default NavBar;
