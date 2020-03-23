import React, { useState } from "react";
import styled, { css } from "styled-components";
import SDG1 from "../sdgs/assets/E_PRINT_01.jpg";
import SDG1b from "../sdgs/assets/E_GIF_01.gif";
import SDG3 from "../sdgs/assets/E_WEB_03.png";
import SDG3b from "../sdgs/assets/E_GIF_03.gif";
import SDG2 from "../sdgs/assets/E_WEB_02.png";
import SDG4 from "../sdgs/assets/E_WEB_04.png";
import SDG4b from "../sdgs/assets/E_GIF_04.gif";
import SDG5 from "../sdgs/assets/E_WEB_05.png";
import SDG6 from "../sdgs/assets/E_WEB_06.png";
import SDG7 from "../sdgs/assets/E_WEB_07.png";
import SDG8 from "../sdgs/assets/E_WEB_08.png";
import SDG8b from "../sdgs/assets/E_GIF_08.gif";
import SDG9 from "../sdgs/assets/E_WEB_09.png";
import SDG10 from "../sdgs/assets/E_WEB_10.png";
import SDG11 from "../sdgs/assets/E_WEB_11.png";
import SDG11b from "../sdgs/assets/E_GIF_11.gif";
import SDG12 from "../sdgs/assets/E_WEB_12.png";
import SDG12b from "../sdgs/assets/E_GIF_12.gif";
import SDG13 from "../sdgs/assets/E_WEB_13.png";
import SDG13b from "../sdgs/assets/E_GIF_13.gif";
import SDG14 from "../sdgs/assets/E_WEB_14.png";
import SDG14b from "../sdgs/assets/E_GIF_14.gif";
import SDG15 from "../sdgs/assets/E_WEB_15.png";
import SDG15b from "../sdgs/assets/E_GIF_15.gif";
import SDG16 from "../sdgs/assets/E_WEB_16.png";
import SDG17 from "../sdgs/assets/E_WEB_17.png";
import { Modal } from "antd";

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
    grid-column-gap: 0px;
    align-items: stretch;
    justify-content: center;
    padding: 10px;
    width: 100%;
`;

export const Sdg = styled.button`
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

    ${props => (props.isUsed ? css`` : css``)}

    img {
        width: 100%;
    }
`;
//11 12 13 14 15 3 4 8
const Sdgs = () => {
    const [visible, setVisible] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible11, setVisible11] = useState(false);
    const [visible8, setVisible8] = useState(false);
    const [visible12, setVisible12] = useState(false);
    const [visible13, setVisible13] = useState(false);
    const [visible14, setVisible14] = useState(false);
    const [visible15, setVisible15] = useState(false);

    const renderDescription = index => {
        index === 1 && setVisible(true);
        index === 3 && setVisible3(true);
        index === 4 && setVisible4(true);
        index === 8 && setVisible8(true);
        index === 11 && setVisible11(true);
        index === 12 && setVisible11(true);
        index === 13 && setVisible13(true);
        index === 14 && setVisible14(true);
        index === 15 && setVisible15(true);
    };

    return (
        <>
            <div style={{ margin: "10px" }}>{"Qual è il fine dell'SDG? Clicca sui box per conoscerli."}</div>
            <PageContainer>
                <Sdg onClick={() => renderDescription(1)} onKeyPress={() => renderDescription(1)} isUsed={false}>
                    <img src={SDG1} alt="sdg-1" />
                </Sdg>

                <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                    <Sdg>
                        <img src={SDG1b} alt="sdg-1b" />
                    </Sdg>
                    PROGRESS OF GOAL 1 IN 2019: <br />
                    The decline of global extreme poverty continues, but has slowed. The deceleration indicates that the
                    world is not on track to achieve the target of less than 3 per cent of the world living in extreme
                    poverty by 2030. People who continue to live in extreme poverty face deep, entrenched deprivation
                    often exacerbated by violent conflicts and vulnerability to disasters. Strong social protection
                    systems and government spending on key services often help those left behind get back on their feet
                    and escape poverty, but these services need to be brought to scale.
                </Modal>

                <Sdg isUsed={false}>
                    <img src={SDG2} alt="sdg-2" />
                </Sdg>

                <Sdg onClick={() => renderDescription(3)} onKeyPress={() => renderDescription(3)} isUsed={true}>
                    <img src={SDG3} alt="sdg-3" />
                </Sdg>
                <Modal visible={visible3} onOk={() => setVisible3(false)} onCancel={() => setVisible3(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG3b} alt="sdg-3b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To ensure healthy lives and promote well-being for all at all ages.
                </Modal>

                <Sdg onClick={() => renderDescription(4)} onKeyPress={() => renderDescription(4)} isUsed={true}>
                    <img src={SDG4} alt="sdg-4" />
                </Sdg>
                <Modal visible={visible4} onOk={() => setVisible4(false)} onCancel={() => setVisible4(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG4b} alt="sdg-4b" />
                    </Sdg>
                    What is the goal here? <br />
                    Ensure inclusive and qual- ity education for all and promote lifelong learning.
                </Modal>

                <Sdg isUsed={false}>
                    <img src={SDG5} alt="sdg-5" />
                </Sdg>

                <Sdg isUsed={false}>
                    <img src={SDG6} alt="sdg-6" />
                </Sdg>

                <Sdg isUsed={false}>
                    <img src={SDG7} alt="sdg-7" />
                </Sdg>

                <Sdg onClick={() => renderDescription(8)} onKeyPress={() => renderDescription(8)} isUsed={true}>
                    <img src={SDG8} alt="sdg-8" />
                </Sdg>
                <Modal visible={visible8} onOk={() => setVisible8(false)} onCancel={() => setVisible8(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG8b} alt="sdg-8b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To promote inclusive and sustainable economic growth, employment and decent work for all.
                </Modal>

                <Sdg isUsed={false}>
                    <img src={SDG9} alt="sdg-9" />
                </Sdg>

                <Sdg isUsed={false}>
                    <img src={SDG10} alt="sdg-10" />
                </Sdg>

                <Sdg onClick={() => renderDescription(11)} onKeyPress={() => renderDescription(11)} isUsed={true}>
                    <img src={SDG11} alt="sdg-11" />
                </Sdg>
                <Modal visible={visible11} onOk={() => setVisible11(false)} onCancel={() => setVisible11(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG11b} alt="sdg-11b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To make cities inclu- sive, safe, resilient and sustainable
                </Modal>

                <Sdg onClick={() => renderDescription(12)} onKeyPress={() => renderDescription(12)} isUsed={true}>
                    <img src={SDG12} alt="sdg-12" />
                </Sdg>
                <Modal visible={visible12} onOk={() => setVisible12(false)} onCancel={() => setVisible12(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG12b} alt="sdg-12b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To ensure sustainable consumption and pro- duction patterns
                </Modal>

                <Sdg onClick={() => renderDescription(13)} onKeyPress={() => renderDescription(13)} isUsed={true}>
                    <img src={SDG13} alt="sdg-13" />
                </Sdg>
                <Modal visible={visible13} onOk={() => setVisible13(false)} onCancel={() => setVisible13(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG13b} alt="sdg-13b" />
                    </Sdg>
                    What’s the goal here? <br />
                    Taking urgent action to tackle climate change and its impacts.
                </Modal>

                <Sdg onClick={() => renderDescription(14)} onKeyPress={() => renderDescription(14)} isUsed={true}>
                    <img src={SDG14} alt="sdg-14" />
                </Sdg>
                <Modal visible={visible14} onOk={() => setVisible14(false)} onCancel={() => setVisible14(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG14b} alt="sdg-14b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To conserve and sustain- ably use the world’s oceans, seas and marine resources.
                </Modal>

                <Sdg onClick={() => renderDescription(15)} onKeyPress={() => renderDescription(15)} isUsed={true}>
                    <img src={SDG15} alt="sdg-15" />
                </Sdg>
                <Modal visible={visible15} onOk={() => setVisible15(false)} onCancel={() => setVisible15(false)}>
                    <Sdg isUsed={true}>
                        <img src={SDG15b} alt="sdg-15b" />
                    </Sdg>
                    What’s the goal here? <br />
                    To sustainably manage forests, combat deserti- fication, halt and reverse land degradation, and halt
                    biodiversity loss.
                </Modal>

                <Sdg>
                    <img src={SDG16} alt="sdg-16" />
                </Sdg>
                <Sdg>
                    <img src={SDG17} alt="sdg-17" />
                </Sdg>
            </PageContainer>
        </>
    );
};

export default Sdgs;
