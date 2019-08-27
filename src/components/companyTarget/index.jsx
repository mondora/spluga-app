import React, { useState } from "react";
import PropTypes from "prop-types";

import { TargetContainer, Title, FieldRight, FieldLeft } from "./styled";
import SplugaNewTarget from "../splugaNewTarget";
import { Button, Modal, message, Progress } from "antd";
import { FormattedMessage } from "react-intl";
import { translateMessage } from "../../i18n";

//TODO:

//export class for testing pourpose
export const CompanyTarget = target => {
    const [visible, setVisible] = useState(false);
    const [done, setDone] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const createTarget = newTarget => {
        if (newTarget) {
            const { info, stakeholder, goal, type, date } = newTarget;

            //check on user input
            if (
                info.name &&
                info.description &&
                stakeholder &&
                goal &&
                type.name &&
                type.value &&
                date.startDate &&
                date.endDate
            ) {
                message.success(translateMessage("c-splugaNewTarget.message.success"));
                setVisible(false);
                setDone(true);
            } else {
                message.error(translateMessage("c-splugaNewTarget.message.error"));
            }

            console.log(
                info.name,
                info.description,
                stakeholder,
                goal,
                type.name,
                type.value,
                date.startDate,
                date.endDate
            );
        }
    };

    return (
        <TargetContainer>
            <Title>
                <FormattedMessage id="c-splugsTarget.cardTitle" />
            </Title>

            {done ? (
                <FieldLeft>
                    <Progress
                        strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068"
                        }}
                        percent={0}
                    />
                </FieldLeft>
            ) : (
                ""
            )}

            <FieldRight>
                <Button type="secondary" size="large" onClick={showModal}>
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
    target: PropTypes.object
};

export default CompanyTarget;
