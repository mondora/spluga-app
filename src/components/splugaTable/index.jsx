import React from "react";
import PropTypes from "prop-types";
import { Switch, Button, Table, Spin } from "antd";

import { Container } from "./styled";
export const SplugaTable = ({
  dataSourceName,
  dataSource,
  onChange,
  loadingStatus
}) => {
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
        title: "Name",
        dataIndex: "name",
        rowKey: "name"
      },
      {
        title: "Description",
        dataIndex: "description"
      },
      {
        title: "UOM",
        dataIndex: "uom"
      }
    ],
    apps: [
      {
        title: "Name",
        dataIndex: "name",
        rowKey: "name"
      },
      {
        title: "Enabled",
        key: "enabled",
        render: row => (
          <Switch checked={!row.disabled} onChange={() => handleChange(row)} />
        )
      },
      {
        title: "Delete",
        key: "delete",
        render: row => (
          <div>
            <Button type="danger" onClick={() => handleDelete(row)}>
              Delete
            </Button>
          </div>
        )
      }
    ]
  };

  const column = columns[dataSourceName];

  return dataSource || loadingStatus.error ? (
    <Container>
      <Table
        columns={column}
        dataSource={dataSource}
        rowKey="name"
        pagination={{ pageSize: 8 }}
      />
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
