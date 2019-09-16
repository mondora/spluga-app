import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, UserTeamContainer, UserContainer, RoleContainer } from "./styled";
import { Avatar } from "antd";

export const UserTeam = ({ user }) => {
    const { picture, name, role } = user;

    return (
        <UserTeamContainer>
            <AvatarContainer>
                <Avatar src={picture} size="large" />
            </AvatarContainer>
            <UserContainer>{name || "User Name"}</UserContainer>
            <RoleContainer>{role || "user"}</RoleContainer>
        </UserTeamContainer>
    );
};

UserTeam.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserTeam;
