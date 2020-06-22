import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../modal";

import styled, { css } from "styled-components";

export const SdgButton = styled.div`
    position: relative;
    margin: 2px;
    width: 150px;
    height: 150px;
    background: none;
    border: none;
    cursor: pointer;

    ${(props) =>
        props.isUsed ||
        css`
            width: 110px;
            height: 110px;
        `}
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;
const Gif = styled(Image)`
    display: none;

    ${SdgButton}:hover & {
        display: block;
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
    return (
        <>
            <SdgButton
                onClick={() => setVisible(true)}
                onKeyPress={() => setVisible(true)}
                isUsed={isUsed}
                gif={sdgGif}
                img={sdgIcon}
            >
                <Image src={sdgIcon} alt={alt} />
                <Gif src={sdgGif} alt={alt} />
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
