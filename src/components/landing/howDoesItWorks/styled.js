import styled from "styled-components";

export const PageContainer = styled.div`
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #bbe5ed, #b399a2);
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
    color: #fff;
`;

export const Title = styled.h1`
    margin: 10px 10px 0 0;

    font-weight: 250;
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding-top: 90px;
    padding-bottom: 40px;
`;

export const StepsContainer = styled.div`
    margin-top: 40px;
    font-size: 80px;
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
