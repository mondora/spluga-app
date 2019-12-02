import styled from "styled-components";

export const PageContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const Title = styled.h1`
    margin: 10px 10px 0 0;
    font-weight: 250;
    text-align: center;
    font-size: 50px;
    padding-top: 90px;
    padding-bottom: 40px;
`;

export const StepsContainer = styled.div`
    padding-top: 40px;
    font-size: 80px;
    color: #fff;
`;
export const SubTitle = styled.span`
    display: block;
    margin-top: 30px;
    font-weight: 150;
    font-size: 25px;
    padding-bottom: 30px;
`;

export const Descriptions = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 15px;
`;

export const Col = styled.div`
    padding: 20px;
    text-align: center;
    font-size: 20px;
`;
