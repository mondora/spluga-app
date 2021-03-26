import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";

import { Container, User, AvatarContainer, FlexDiv } from "./styled";
export const Header = ({ user, onClick }) => {
    console.log("user", user);
    const data = user && user.profile ? user.profile : null;
    return (
        <Container>
            <FlexDiv>
                <User>
                    {data ? data.name : null}
                    <AvatarContainer>
                        <Avatar src={data.pictureUrl} size="large" />
                    </AvatarContainer>
                </User>
                <button onClick={onClick}>{"LOGOUT"}</button>
            </FlexDiv>
        </Container>
    );
};

Header.propTypes = {
    user: PropTypes.object,
    onClick: PropTypes.func,
};

export default Header;
