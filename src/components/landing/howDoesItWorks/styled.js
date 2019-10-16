import styled from "styled-components";

export const PageContainer = styled.div`
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #bbe5ed, #b399a2);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 40% auto 40%;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
    color: #fff;
`;

export const Title = styled.h1`
    font-weight: 250;
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding-top: 90px;
    padding-bottom: 30px;
`;

export const StepsContainer = styled.div`
    font-size: 80px;
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

export const Col = styled.div`
    font-size: 20px;
`;
