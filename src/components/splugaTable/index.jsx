import React from "react";
import PropTypes from "prop-types";
import { Switch, Button, Table, Spin } from "antd";

import { Container } from "./styled";
import { FormattedMessage } from "react-intl";
export const SplugaTable = ({ dataSourceName, dataSource, onChange, loadingStatus }) => {
    const handleChange = row => {
        if (row.disabled) {
            onChange({ action: "enable", id: row.id });
        } else {
            onChange({ action: "disable", id: row.id });
        }
    };

    const handleDelete = row => {
        onChange({ action: "delete", id: row.id });
    };

    const columns = {
        goals: [
            {
                title: <FormattedMessage id="general.name" />,
                dataIndex: "name",
                rowKey: "name"
            },
            {
                title: <FormattedMessage id="general.description" />,
                dataIndex: "description"
            },
            {
                title: "UOM",
                dataIndex: "uom"
            }
        ],
        apps: [
            {
                title: <FormattedMessage id="general.name" />,
                dataIndex: "name",
                rowKey: "name"
            },
            {
                title: <FormattedMessage id="general.enabled" />,
                key: "enabled",
                render: row => <Switch checked={!row.disabled} onChange={() => handleChange(row)} />
            },
            {
                title: <FormattedMessage id="general.delete" />,
                key: "delete",
                render: row => (
                    <div>
                        <Button type="danger" onClick={() => handleDelete(row)}>
                            <FormattedMessage id="general.delete" />
                        </Button>
                    </div>
                )
            }
        ],
        targets: [
            {
                title: "Name",
                dataIndex: "name",
                rowKey: "name"
            },
            {
                title: "Description",
                dataIndex: "description"
            },
            {
                title: "Stakeholder",
                dataIndex: "stakeholder"
            },
            {
                title: "Company",
                dataIndex: "company"
            },
            {
                title: "Goal",
                dataIndex: "goal"
            },
            {
                title: "Limit",
                dataIndex: "limit"
            },
            {
                title: "Start Date",
                dataIndex: "startDate"
            },
            {
                title: "End Date",
                dataIndex: "endDate"
            }
        ]
    };

    const column = columns[dataSourceName];

    return dataSource || (loadingStatus && loadingStatus.error) ? (
        <Container>
            <Table columns={column} dataSource={dataSource} rowKey="name" pagination={{ pageSize: 8 }} />
        </Container>
    ) : (
        <Container>
            <Spin tip="Loading..." size="large" />
        </Container>
    );
};

Container.propTypes = {
    dataSourceName: PropTypes.string,
    dataSource: PropTypes.array,
    onChange: PropTypes.func,
    loadingStatus: PropTypes.object
};

export default SplugaTable;
