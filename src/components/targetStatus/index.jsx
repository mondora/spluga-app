import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, NameContainer, UserTeamContainer, RoleContainer } from "./styled";
import { Avatar, Progress } from "antd";

export const TargetStatus = ({ target }) => {
    const { name, value, actual } = target;
    const percent = parseInt((actual / value) * 100);
    return (
        <UserTeamContainer>
            <AvatarContainer>
                <Avatar size="large" />
            </AvatarContainer>
            <NameContainer>{name}</NameContainer>
            <RoleContainer>
                <Progress percent={percent} />
            </RoleContainer>
        </UserTeamContainer>
    );
};

TargetStatus.propTypes = {
    target: PropTypes.object.isRequired
};

export default TargetStatus;
