import React, { useState } from "react";
import styled from "styled-components";
import SDG1 from "../sdgs/assets/E_PRINT_01.jpg";
import SDG1b from "../sdgs/assets/E_GIF_01.gif";
import SDG3 from "../sdgs/assets/E_WEB_03.png";
import SDG2 from "../sdgs/assets/E_WEB_02.png";
import SDG4 from "../sdgs/assets/E_WEB_04.png";
import SDG5 from "../sdgs/assets/E_WEB_05.png";
import SDG6 from "../sdgs/assets/E_WEB_06.png";
import SDG7 from "../sdgs/assets/E_WEB_07.png";
import SDG8 from "../sdgs/assets/E_WEB_08.png";
import SDG9 from "../sdgs/assets/E_WEB_09.png";
import SDG10 from "../sdgs/assets/E_WEB_10.png";
import SDG11 from "../sdgs/assets/E_WEB_11.png";
import SDG12 from "../sdgs/assets/E_WEB_12.png";
import SDG13 from "../sdgs/assets/E_WEB_13.png";
import SDG14 from "../sdgs/assets/E_WEB_14.png";
import SDG15 from "../sdgs/assets/E_WEB_15.png";
import SDG16 from "../sdgs/assets/E_WEB_16.png";
import SDG17 from "../sdgs/assets/E_WEB_17.png";
import { Modal } from "antd";

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
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

    &:hover {
        filter: contrast(175%) brightness(103%);
    }

    img {
        width: 100%;
    }
`;

const Sdgs = () => {
    const [visible, setVisible] = useState(false);
    const renderDescription = () => {
        setVisible(true);
    };
    return (
        <PageContainer>
            <Sdg onClick={() => renderDescription()} onKeyPress={() => renderDescription()}>
                <img src={SDG1} alt="sdg-1" />
            </Sdg>
            <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                <Sdg>
                    <img src={SDG1b} alt="sdg-1b" />
                </Sdg>
                PROGRESS OF GOAL 1 IN 2019: <br />
                The decline of global extreme poverty continues, but has slowed. The deceleration indicates that the
                world is not on track to achieve the target of less than 3 per cent of the world living in extreme
                poverty by 2030. People who continue to live in extreme poverty face deep, entrenched deprivation often
                exacerbated by violent conflicts and vulnerability to disasters. Strong social protection systems and
                government spending on key services often help those left behind get back on their feet and escape
                poverty, but these services need to be brought to scale.
            </Modal>
            <Sdg>
                <img src={SDG2} alt="sdg-2" />
            </Sdg>
            <Sdg>
                <img src={SDG3} alt="sdg-3" />
            </Sdg>
            <Sdg>
                <img src={SDG4} alt="sdg-4" />
            </Sdg>
            <Sdg>
                <img src={SDG5} alt="sdg-5" />
            </Sdg>
            <Sdg>
                <img src={SDG6} alt="sdg-6" />
            </Sdg>
            <Sdg>
                <img src={SDG7} alt="sdg-7" />
            </Sdg>
            <Sdg>
                <img src={SDG8} alt="sdg-8" />
            </Sdg>
            <Sdg>
                <img src={SDG9} alt="sdg-9" />
            </Sdg>
            <Sdg>
                <img src={SDG10} alt="sdg-10" />
            </Sdg>
            <Sdg>
                <img src={SDG11} alt="sdg-11" />
            </Sdg>
            <Sdg>
                <img src={SDG12} alt="sdg-12" />
            </Sdg>
            <Sdg>
                <img src={SDG13} alt="sdg-13" />
            </Sdg>
            <Sdg>
                <img src={SDG14} alt="sdg-14" />
            </Sdg>
            <Sdg>
                <img src={SDG15} alt="sdg-15" />
            </Sdg>
            <Sdg>
                <img src={SDG16} alt="sdg-16" />
            </Sdg>
            <Sdg>
                <img src={SDG17} alt="sdg-17" />
            </Sdg>
        </PageContainer>
    );
};

export default Sdgs;
