import styled from "styled-components";

export const PageContainer = styled.div`
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #bbe5ed, #b399a2);
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    min-height: 775px;
`;

export const Title = styled.h1`
    text-align: center;
    padding-top: 90px;
    font-size: 50px;
    font-weight: 250;
    color: #fff;
`;
export const List = styled.ul`
    padding-bottom: 30px;
    text-align: left;
`;

export const VYBIcon = styled.div`
    font-size: 80px;
    color: #fff;
`;

export const VYBGrid = styled.div`
    font-size: 25px;
    display: grid;
    grid-template-columns: auto auto auto;
    color: #fff;
`;
