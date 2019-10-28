import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Switch, Button, Icon } from "antd";
import { FormattedMessage } from "react-intl";

import { Container, AvatarContainer, Title, SwitchContainer, ButtonContainer, Avatar } from "./styled";

export const AppCard = ({ app, readOnly, onChange }) => {
    const { id, name, logo, disabled } = app;

    const [switchStatus, setSwitchStatus] = useState(disabled);
    const handleChange = () => {
        if (switchStatus) {
            onChange({ action: "enable", id });
        } else {
            onChange({ action: "disable", id });
        }
        setSwitchStatus(!switchStatus);
    };

    const handleDelete = () => {
        onChange({ action: "delete", id });
    };

    return (
        <Container>
            <Title> {name}</Title>
            <AvatarContainer>
                {logo ? <Avatar size="large" src={`data:image/jpeg;base64,${logo}`} /> : <Icon type="api" />}
            </AvatarContainer>
            <SwitchContainer>
                <Switch size="small" checked={!switchStatus} onChange={handleChange} disabled={readOnly} />
            </SwitchContainer>
            <ButtonContainer>
                <Button type="danger" onClick={handleDelete} disabled={readOnly}>
                    <FormattedMessage id="general.delete" />
                </Button>
            </ButtonContainer>
        </Container>
    );
};

AppCard.propTypes = {
    app: PropTypes.object,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
};

export default AppCard;
