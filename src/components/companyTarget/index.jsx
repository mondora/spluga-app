import React, { useState } from "react";
import PropTypes from "prop-types";

import { TargetContainer, Title, FieldRight } from "./styled";
import SplugaNewTarget from "../splugaNewTarget";
import { Button, Modal, Icon } from "antd";
import { FormattedMessage } from "react-intl";

export const CompanyTarget = ({ onAddTarget }) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const createTarget = target => {
        setVisible(false);
        onAddTarget(target);
    };

    return (
        <TargetContainer>
            <Title>
                <FormattedMessage id="c-splugaTarget.cardTitle" />
            </Title>

            <FieldRight>
                <Button type="link" size="large" onClick={showModal}>
                    <Icon type="file-add" />
                    <FormattedMessage id="general.add" />
                </Button>
            </FieldRight>

            <Modal
                title={<FormattedMessage id="c-splugaNewTarget.create" />}
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
            >
                <SplugaNewTarget onSubmit={createTarget} />
            </Modal>
        </TargetContainer>
    );
};

CompanyTarget.defaultProps = {
    target: {}
};

CompanyTarget.propTypes = {
    auth: PropTypes.object,
    target: PropTypes.object,
    onAddTarget: PropTypes.func.isRequired
};

export default CompanyTarget;
