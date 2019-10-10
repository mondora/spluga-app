import React, { useState } from "react";
import PropTypes from "prop-types";
import { TargetContainer, Title, FieldRight, FieldGrid } from "./styled";
import SplugaNewTarget from "../splugaNewTarget";
import TargetStatus from "../targetStatus";
import { Modal, Icon } from "antd";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import moment from "moment";

export const CompanyTarget = ({ onAddTarget, targets }) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const createTarget = target => {
        setVisible(false);
        onAddTarget(target);
    };

    const filteredTargets = targets
        ? targets
              .filter(target => {
                  return moment().diff(target.endDate, "days") < 0 && target.actual < target.value;
              })
              .slice(0, 4)
        : null;
    return (
        <TargetContainer>
            <Title>
                <FormattedMessage id="c-splugaTarget.cardTitle" />
            </Title>

            <FieldRight>
                <Link to="#" onClick={showModal}>
                    <Icon type="file-add" />
                    <FormattedMessage id="general.add" />
                </Link>
            </FieldRight>
            <FieldGrid>
                {filteredTargets
                    ? filteredTargets.map(target => <TargetStatus target={target} key={target.name} />)
                    : null}
            </FieldGrid>
            <FieldRight>
                <Link to="/targets">
                    <Icon type="arrow-right" />
                    <FormattedMessage id="c-splugaTarget.view" />
                </Link>
            </FieldRight>
            <Modal
                centered
                destroyOnClose
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
    targets: PropTypes.array,
    onAddTarget: PropTypes.func.isRequired
};

export default CompanyTarget;
