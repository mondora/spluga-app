import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.7);
    z-index: 1;

    ${(props) =>
        props.showModal &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
        `}

    animation-name: fadeInOverlay;
    animation-duration: 0.3s;

    @keyframes fadeInOverlay {
        from {
            background-color: rgba(0, 0, 0, 0);
        }
        to {
            background-color: rgba(51, 51, 51, 0.7);
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 4px;
    background: white;

    animation-name: fadeIn;
    animation-duration: 0.5s;

    @keyframes fadeIn {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }
`;

export const Header = styled.h2`
    border-bottom: 1px solid #ccc;
    padding: 16px;
    margin: 0;
`;

export const Body = styled.div`
    padding: 16px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
`;

export const Button = styled.button`
    border: 0;
    background: #bfbccb;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1;
`;

const Modal = ({ handleClose, show, title, children }) => {
    return (
        <Container showModal={show}>
            <Content>
                <Header>{title}</Header>
                <Body>{children}</Body>
                <Actions>
                    <Button onClick={handleClose}>{"Chiudi"}</Button>
                </Actions>
            </Content>
        </Container>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
};

export default Modal;
