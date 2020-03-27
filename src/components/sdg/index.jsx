import React, { useState } from "react";
import PropTypes from "prop-types";

import { useHover } from "../../lib/hooks";

import { Modal } from "antd";

import styled, { css } from "styled-components";

export const SdgButton = styled.button`
    width: 173px;
    height: 173px;
    background: transparent;
    border: none;
    cursor: pointer;

    ${props =>
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

const Sdg = ({ sdgIcon, sdgGif, isUsed = false, alt = "sdg", description = "" }) => {
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
            <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                {description}
            </Modal>
        </>
    );
};

Sdg.propTypes = {
    sdgIcon: PropTypes.any,
    sdgGif: PropTypes.any,
    isUsed: PropTypes.bool,
    alt: PropTypes.string,
    description: PropTypes.string
};

export default Sdg;
