import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const Title = styled.h2`
    font-weight: 250;
    text-align: center;
    font-size: 50px;
    color: #000;
    padding-top: 90px;
    padding-bottom: 30px;
`;

export const SubTitle = styled.h4`
    font-weight: 150;
    font-size: 30px;
    padding-bottom: 30px;
`;

export const Desc = styled.div`
    font-size: 18px;
    padding-bottom: 30px;
`;

export const List = styled.ul`
    font-size: 18px;
    padding-bottom: 30px;
    text-align: left;
`;

export const WhatIsIcon = styled.div`
    font-size: 80px;
    color: #b399a2;
`;

export const WhatIsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;
