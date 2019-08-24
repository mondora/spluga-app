import React, { useState } from "react";
import PropTypes from "prop-types";

import { TargetContainer } from "./styled";
import SplugaNewTarget from "../../components/splugaNewTarget";
import { Button, Modal } from "antd";
import { FormattedMessage } from "react-intl";

//TODO:

//export class for testing pourpose
export const SplugaTarget = props => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <TargetContainer>
            <Button type="primary" size="large">
                <FormattedMessage id="general.show" />
            </Button>
            <Button type="secondary" size="large" onClick={showModal}>
                <FormattedMessage id="general.add" />
            </Button>

            <Modal
                title={<FormattedMessage id="c-splugaNewTarget.create" />}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <SplugaNewTarget />
            </Modal>
        </TargetContainer>
    );
};

SplugaTarget.defaultProps = {
    target: "target"
};

SplugaTarget.propTypes = {
    auth: PropTypes.object.isRequired,
    target: PropTypes.object
};

export default SplugaTarget;
