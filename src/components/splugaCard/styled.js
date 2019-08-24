import styled from "styled-components";

export const CardTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: -10px;
`;

export const CardSubtitle = styled.h4`
    margin-top: 20px;
    text-align: center;
`;

export const CardDescription = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px;
`;

export const CardContainer = styled.div`
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 3px solid #bfbccb;
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
