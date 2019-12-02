import styled from "styled-components";

export const PageContainer = styled.form`
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #bbe5ed, #b399a2);
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 0;
    padding-bottom: 5%;
`;

export const Title = styled.h1`
    text-align: center;
    padding-top: 90px;
    padding-bottom: 30px;
    font-size: 50px;
    font-weight: 250;
    color: #fff;
`;

export const Desc = styled.div`
    display: block;
    text-align: center;
    padding-bottom: 30px;
    font-weight: 150;
    font-size: 30px;
    color: #fff;
`;

export const Link = styled.a`
    text-align: center;
    padding-bottom: 30px;
    font-weight: 150;
    font-size: 30px;
    color: #fff;
    &:hover {
        color: #fff;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`;
