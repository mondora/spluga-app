import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../modal";

import styled, { css } from "styled-components";

export const SdgButton = styled.div`
    margin: 2px;
    width: 170px;
    height: 170px;
    background: transparent;
    border: none;
    cursor: pointer;
    content: url(${(props) => props.img});

    ${(props) =>
        props.isUsed
            ? css`
                  &:hover {
                      content: url(${(props) => props.gif});
                  }
              `
            : css`
                  filter: opacity(25%);
              `}
`;

export const Description = styled.div`
    font-size: 16px;
    padding-bottom: 8px;
`;

export const Summary = styled.div`
    font-weight: 600;
`;

const Sdg = ({ sdgIcon, sdgGif, isUsed = false, alt = "sdg", description = "", summary = "" }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <SdgButton
                onClick={() => setVisible(true)}
                onKeyPress={() => setVisible(true)}
                isUsed={isUsed}
                gif={sdgGif}
                img={sdgIcon}
            />

            <Modal title={"Descrizione"} show={visible} handleClose={() => setVisible(false)}>
                <Description>{description}</Description>

                <Summary>{summary}</Summary>
            </Modal>
        </>
    );
};

Sdg.propTypes = {
    sdgIcon: PropTypes.string,
    sdgGif: PropTypes.string,
    isUsed: PropTypes.bool,
    alt: PropTypes.string,
    description: PropTypes.string,
    summary: PropTypes.string,
};

export default Sdg;
