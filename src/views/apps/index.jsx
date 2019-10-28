import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Modal, Icon, notification } from "antd";

import { addApp, deleteApp, disableApp, enableApp } from "../../actions/apps";
import { getCompany } from "../../actions/companies";

import AppCard from "../../components/appCard";
import AppForm from "../../components/appForm";
import SplugaResult from "../../components/splugaResult";

import { PageContainer, Title, AppContainer, FieldRight } from "./styled";

export const Apps = ({ auth, company, getCompany, appCreated, addApp, enableApp, disableApp, deleteApp }) => {
    const [deleted, setDeleted] = useState(null);
    const notify = (type, message) => {
        notification[type]({
            message: type,
            description: message
        });
    };

    useEffect(() => {
        getCompany({});
    }, [getCompany]);

    const [selectedFile, setSelectedFile] = useState("");
    const [visible, setVisible] = useState(false);

    const selectedCompany = company && company.result ? company.result : null;

    const showModal = () => {
        setVisible(true);
    };

    useEffect(() => {
        const { error, errorInfo } = appCreated.status;
        if (error) {
            notify("error", errorInfo.message.message);
        }
    }, [appCreated, addApp]);

    const onChange = data => {
        const id = data.id;
        const companyId = selectedCompany ? selectedCompany._id : null;
        switch (data.action) {
            case "enable":
                enableApp(id, companyId);
                break;
            case "disable":
                disableApp(id, companyId);
                break;
            case "delete":
                deleteApp(id, companyId);
                setDeleted(id);
                break;
            default:
        }
    };

    const handleSelectFile = base64 => {
        setSelectedFile(base64);
    };

    const onSubmit = data => {
        const companyId = selectedCompany ? selectedCompany._id : null;
        data.logo = selectedFile;
        addApp(data, auth.currentUser.id, companyId);
        setVisible(false);
    };
    const app = appCreated ? appCreated.app : null;
    const resultTitle = app ? <FormattedMessage id="v-app.create" values={{ appName: `${app.name}` }} /> : null;
    const resultSubTitle = app ? <FormattedMessage id="v-app.message" /> : null;
    const companyApps = selectedCompany ? selectedCompany.apps : null;

    return app ? (
        <PageContainer>
            <Title>Apps</Title>
            <SplugaResult title={resultTitle} subTitle={resultSubTitle} param={app.key} />
        </PageContainer>
    ) : (
        <PageContainer>
            <Title>Apps</Title>
            <FieldRight>
                <Link to="#" onClick={showModal}>
                    <Icon type="file-add" />
                    <FormattedMessage id="general.add" />
                </Link>
            </FieldRight>
            <AppContainer>
                {companyApps
                    ? companyApps
                          .filter(app => app.id !== deleted)
                          .map(app => (
                              <AppCard
                                  key={app.id}
                                  app={app}
                                  readOnly={app.createdBy !== auth.currentUser.id}
                                  onChange={data => onChange(data)}
                              />
                          ))
                    : null}
            </AppContainer>

            <Modal
                centered
                destroyOnClose
                title={<FormattedMessage id={"v-app.create.title"} />}
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
            >
                <AppForm onSelectFile={handleSelectFile} onSubmit={x => onSubmit(x)} />
            </Modal>
        </PageContainer>
    );
};

Apps.propTypes = {
    auth: PropTypes.object,
    getCompany: PropTypes.func,

    apps: PropTypes.array,
    appCreated: PropTypes.object,
    appDeleted: PropTypes.object,

    addApp: PropTypes.func,
    deleteApp: PropTypes.func,
    disableApp: PropTypes.func,
    enableApp: PropTypes.func
};

const mapStateToProps = state => ({
    auth: state.auth,
    company: state.getCompany,
    appCreated: state.addApp,
    appDeleted: state.deleteApp
});

export default connect(
    mapStateToProps,
    { addApp, deleteApp, disableApp, enableApp, getCompany }
)(Apps);
