import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addApp, getApps, deleteApp, disableApp, enableApp } from "../../actions/apps";

import SplugaTable from "../../components/splugaTable";
import AppForm from "../../components/appForm";
import SplugaResult from "../../components/splugaResult";

import { PageContainer, Title } from "./styled";
import { FormattedMessage } from "react-intl";

export const Apps = ({
    apps,
    app,
    disableAppStatus,
    enableAppStatus,
    deleteAppStatus,
    addAppStatus,
    getAppsStatus,
    addApp,
    enableApp,
    disableApp,
    deleteApp,
    getApps
}) => {
    useEffect(() => {
        if (!getApps.started && !disableAppStatus.started && !enableAppStatus.started && !deleteAppStatus.started) {
            getApps();
        }
    }, [getApps, disableAppStatus, enableAppStatus, deleteAppStatus]);

    const serverError = addAppStatus.error ? addAppStatus.errorInfo.message : "";

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
        addApp(data.appName);
    };

    const resultTitle = app ? <FormattedMessage id="v-app.create" values={{ appName: `${app.name}` }} /> : null;
    const resultSubTitle = app ? <FormattedMessage id="v-apps.message" /> : null;

    return app ? (
        <PageContainer>
            <Title>Apps</Title>
            <SplugaResult title={resultTitle} subTitle={resultSubTitle} param={app.key} />
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
            <AppForm serverError={serverError} onSubmit={x => onSubmit(x)} />
        </PageContainer>
    );
};

Apps.propTypes = {
    apps: PropTypes.array,
    app: PropTypes.object,
    disableAppStatus: PropTypes.object,
    enableAppStatus: PropTypes.object,
    deleteAppStatus: PropTypes.object,
    addAppStatus: PropTypes.object,
    getAppsStatus: PropTypes.object,
    addApp: PropTypes.func,
    getApps: PropTypes.func,
    deleteApp: PropTypes.func,
    disableApp: PropTypes.func,
    enableApp: PropTypes.func
};

const mapStateToProps = state => ({
    apps: state.getApps.apps,
    app: state.addApp.app,
    getAppsStatus: state.getApps.status,
    addAppStatus: state.addApp.status,
    disableAppStatus: state.disableApp.status,
    enableAppStatus: state.enableApp.status,
    deleteAppStatus: state.deleteApp.status
});

export default connect(
    mapStateToProps,
    { addApp, getApps, deleteApp, disableApp, enableApp }
)(Apps);
