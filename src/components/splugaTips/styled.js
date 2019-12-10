import styled from "styled-components";

export const TipsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-column-start: 1;
    grid-column-end: 6;
    padding: 5px;
    border: 3px solid #bfbccb;
    border-radius: 8px;
    height: 100%;
    margin: 10px;
`;
export const TitleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;
export const Title = styled.h3`
    text-align: justify;
    margin: 10px;
`;

export const Subtitle = styled.span`
    text-align: justify;
    margin: 10px;
`;
export const TipContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
export const Avatar = styled.img`
    width: 100%;
    border-radius: 8px;
    margin: 20px;
`;
export const AvatarContainer = styled.div`
    width: 200px;
    border-radius: 8px;
    margin: 20px;
`;
export const Tip = styled.div`
    text-align: justify;
    margin: 30px 30px 10px 30px;
`;
