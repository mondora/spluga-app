import React, { useState } from "react";
import PropTypes from "prop-types";

import { TargetContainer, Title, FieldRight, FieldLeft, AvatarStyle } from "./styled";
import SplugaNewTarget from "../splugaNewTarget";
import { Button, Modal, message, Progress, Avatar } from "antd";
import { FormattedMessage } from "react-intl";
import { translateMessage } from "../../i18n";

/*
TODO: 
- reset spluga new target form after its filling


*/

//export class for testing pourpose
export const CompanyTarget = target => {
    const [visible, setVisible] = useState(false);
    const [done, setDone] = useState(false);
    const [newTarget, setNewTarget] = useState();

    const showModal = () => {
        setVisible(true);
    };

    const createTarget = newTarget => {
        if (newTarget) {
            const { info, stakeholder, goal, type, date } = newTarget;

            //check on user input
            if (
                info !== undefined &&
                info.name !== undefined &&
                info.description !== undefined &&
                stakeholder &&
                goal &&
                type !== undefined &&
                type.name !== undefined &&
                type.value !== undefined &&
                date !== undefined &&
                date.startDate !== undefined &&
                date.endDate !== undefined
            ) {
                if (date.startDate < date.endDate) {
                    //addTarget

                    message.success(translateMessage("c-splugaNewTarget.message.success"));
                    setVisible(false);
                    setNewTarget(newTarget);
                    setDone(true);
                } else {
                    message.error("reinserire il periodo");
                }
            } else {
                message.error(translateMessage("c-splugaNewTarget.message.error"));
            }
        }
    };

    return (
        <TargetContainer>
            <Title>
                <FormattedMessage id="c-splugsTarget.cardTitle" />
            </Title>

            {done ? (
                <FieldLeft>
                    <AvatarStyle>
                        <Avatar style={{ backgroundColor: "#87d068" }} size={50}>
                            {newTarget.info.name}
                        </Avatar>
                    </AvatarStyle>
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
