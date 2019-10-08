import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { PageContainer, LinkGroupContainer, LinkContainer, LinkLoginContainer } from "./styled";

export const NavBar = ({ onLogin }) => {
    return (
        <PageContainer>
            <LinkGroupContainer>
                <LinkContainer to="what-is-spluga" smooth={true} duration={1500}>
                    <FormattedMessage id="general.whatIs" />
                </LinkContainer>
                <LinkContainer to="how-does-it-work" smooth={true} duration={1500}>
                    <FormattedMessage id="general.howDoesItWork" />
                </LinkContainer>
                <LinkContainer to="contact" smooth={true} duration={1500}>
                    <FormattedMessage id="general.joinUs" />
                </LinkContainer>
            </LinkGroupContainer>
            <LinkLoginContainer>
                <LinkContainer to="#" onClick={onLogin}>
                    <FormattedMessage id="general.login" />
                </LinkContainer>
            </LinkLoginContainer>
        </PageContainer>
    );
};

NavBar.propTypes = {
    onLogin: PropTypes.func
};

export default NavBar;
