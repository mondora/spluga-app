//utilizzo menu antd con le 4 opzioni che mi rendeizzano ai 4 componenti 1 view root
import React from "react";
import { Menu, Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	state = {
		current: "objectives"
	};

	render() {
		const { currentPage } = this.props;

		return (
			<Row gutter={16}>
				<Col span={6}>
					<Menu selectedKeys={[currentPage]} mode="inline">
						<Menu.Item key="companies">
							<Link to="/companies">
								<Icon type="team" />
								Company
							</Link>
						</Menu.Item>
						<Menu.Item key="objectives">
							<Link to="/objectives">
								<Icon type="line-chart" />
								Objectives
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
				</Col>
				<Col span={24} />
			</Row>
		);
	}
}

export default NavBar;
