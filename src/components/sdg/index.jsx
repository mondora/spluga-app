import React, { useState } from "react";
import PropTypes from "prop-types";

import { useHover } from "../../lib/hooks";

import Modal from "../modal";

import styled, { css } from "styled-components";

export const SdgButton = styled.button`
    width: 173px;
    height: 173px;
    background: transparent;
    border: none;
    cursor: pointer;

    ${(props) =>
        props.isUsed
            ? css`
                  &:hover {
                      filter: contrast(160%) brightness(100%);
                  }
              `
            : css`
                  filter: opacity(25%) grayscale(0.3);
              `}

    img {
        width: 100%;
    }
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
    const [hoverRef, isHovered] = useHover();
    return (
        <>
            <SdgButton
                ref={hoverRef}
                onClick={() => setVisible(true)}
                onKeyPress={() => setVisible(true)}
                isUsed={isUsed}
            >
                {isHovered && isUsed ? <img src={sdgGif} alt={alt} /> : <img src={sdgIcon} alt={alt} />}
            </SdgButton>

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
