import styled from "styled-components";

export const TipsContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 6;
    padding: 5px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
    margin: 10px;
`;

export const Title = styled.div`
    text-align: justify;
    font-weight: bolder;
    font-size: 20px;
    margin: 10px;
`;

export const Subtitle = styled.span`
    text-align: justify;
    font-size: 16px;
    margin: 10px;
`;

export const Avatar = styled.img`
    width: 80px;
    border-radius: 8px;
    margin: 20px;
`;

export const Tip = styled.span`
    position: absolute;
    text-align: justify;
    margin-top: 30px;
    margin-right: 10px;
`;
