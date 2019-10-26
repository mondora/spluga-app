import styled from "styled-components";

export const Title = styled.h3`
    margin-top: 20px;
`;

export const Subtitle = styled.h4`
    margin-top: 20px;
    text-align: center;
`;

export const Container = styled.div`
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 3px solid #bfbccb;
    height: 100%;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 0px 5px;
`;

export const Avatar = styled.img`
    width: 150px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
`;
