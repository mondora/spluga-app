import styled from "styled-components";

export const CardBackground = styled.div`
    position: relative;
    height: 48vh;
    width: 20vw;
    margin-bottom: 2vh;
    border-radius: 24px;
    background: rgba(57, 92, 107, 0.2);
    overflow: hidden;
`;

export const CardTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const CardDate = styled.div`
    font-size: 20px;
`;

export const CardDescription = styled.div`
    font-size: 32px;
`;

export const CardActualProgress = styled.div`
    font-size: 20px;
    width: 100%;
`;

export const CardPercentageProgress = styled.div`
    width: calc(100% - 32px);
    font-size: 100px;
    font-weight: 700;
`;

export const CardIcon = styled.img``;

export const TopElements = styled.div`
    justify-self: start;
`;

export const BottomElements = styled.div`
    justify-self: end;
`;

export const Wave = styled.div`
    width: 1000px;
    height: 1025px;
    position: absolute;
    top: ${({ percent }) => `-${(percent * 115) / 100 + 15}%`};
    left: 50%;
    margin-left: -500px;
    margin-top: -500px;
    border-radius: 35%;
    background: rgba(255, 255, 255, 0.75);
    transform: ${({ percent }) => `rotate(${(percent * 360) / 100}deg)`};
`;

export const CardContainer = styled.div`
    position: absolute;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex-direction: column;
    flex-flow: column nowrap;
    display: flex;
    text-align: center;
    padding: 16px;
    z-index: 9;
`;
