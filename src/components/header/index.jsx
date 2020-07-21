import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";

import { Container, User, AvatarContainer } from "./styled";
export const Header = ({ user }) => {
    const data = user && user.profile ? user.profile.data : null;
    return (
        <Container>
            <User>
                {data ? data.name : null}
                <AvatarContainer>
                    <Avatar src={data ? data.picture : null} size="large" />
                </AvatarContainer>
            </User>
        </Container>
    );
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
