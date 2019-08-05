import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  createApp,
  getApps,
  deleteApp,
  disableApp,
  enableApp
} from "../../actions/apps";

import SplugaTable from "../../components/splugaTable";
import SplugaForm from "../../components/splugaForm";
import SplugaResult from "../../components/splugaResult";

import { PageContainer, Title } from "./styled";

const Apps = ({
  apps,
  app,
  disableAppStatus,
  enableAppStatus,
  deleteAppStatus,
  createAppStatus,
  getAppsStatus,
  createApp,
  enableApp,
  disableApp,
  deleteApp,
  getApps
}) => {
  useEffect(() => {
    if (
      !getApps.started &&
      !disableAppStatus.started &&
      !enableAppStatus.started &&
      !deleteAppStatus.started
    ) {
      getApps();
    }
  }, [getApps, disableAppStatus, enableAppStatus, deleteAppStatus]);

  const serverError = createAppStatus.error
    ? createAppStatus.errorInfo.message
    : "";

  const onChange = data => {
    const id = data.id;
    switch (data.action) {
      case "enable":
        enableApp(id);
        break;
      case "disable":
        disableApp(id);
        break;
      case "delete":
        deleteApp(id);
        break;
      default:
    }
  };

  const onSubmit = data => {
    createApp(data.appName);
  };

  const resultTitle = app ? "New app " + app.name + " created" : null;
  const resultSubTitle = app
    ? "Make sure to copy key value below somewhere safe, otherwise you will need to generate a new key."
    : null;

  const fields = [
    {
      name: "appName",
      description: "App Name",
      ref: {
        required: "this is required",
        minLength: {
          value: 2,
          message: "Min length is 2"
        }
      }
    }
  ];

  return app ? (
    <PageContainer>
      <Title>Apps</Title>
      <SplugaResult
        title={resultTitle}
        subTitle={resultSubTitle}
        param={app.key}
      />
    </PageContainer>
  ) : (
    <PageContainer>
      <Title>Apps</Title>
      <SplugaTable
        dataSourceName="apps"
        dataSource={apps}
        onChange={x => onChange(x)}
        loadingStatus={getAppsStatus}
      />
      <SplugaForm
        title="Create App"
        fields={fields}
        serverError={serverError}
        onSubmit={x => onSubmit(x)}
      />
    </PageContainer>
  );
};

Apps.propTypes = {
  apps: PropTypes.array,
  disableAppStatus: PropTypes.object,
  enableAppStatus: PropTypes.object,
  deleteAppStatus: PropTypes.object,
  createAppStatus: PropTypes.object,
  getAppsStatus: PropTypes.object,
  createApp: PropTypes.func,
  getApps: PropTypes.func,
  deleteApp: PropTypes.func,
  disableApp: PropTypes.func,
  enableApp: PropTypes.func
};

const mapStateToProps = state => ({
  apps: state.getApps.apps,
  app: state.createApp.app,
  getAppsStatus: state.getApps.status,
  createAppStatus: state.createApp.status,
  disableAppStatus: state.disableApp.status,
  enableAppStatus: state.enableApp.status,
  deleteAppStatus: state.deleteApp.status
});

export default connect(
  mapStateToProps,
  { createApp, getApps, deleteApp, disableApp, enableApp }
)(Apps);
