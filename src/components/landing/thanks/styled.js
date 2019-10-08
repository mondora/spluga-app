import styled from "styled-components";

export const PageContainer = styled.div`
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #bbe5ed, #b399a2);
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const Desc = styled.div`
    color: #fff;
    display: block;
    text-align: center;
    font-weight: 200;
    font-size: 50px;
`;

export const ImageContainer = styled.div`
    display: block;
    text-align: center;
`;

export const Img = styled.img`
    width: 10%;
`;
