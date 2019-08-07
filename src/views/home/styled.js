import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    padding: 5px;
    background: url("https://spluga.io/img/bg-pattern.png"), #986c6a;
    background: url("https://spluga.io/img/bg-pattern.png"),
        -webkit-gradient(linear, right top, left top, from(#986c6a), to(#bfbccb));
    background: url("https://spluga.io/img/bg-pattern.png"),
        linear-gradient(to left, #986c6a, #bfbccb);
`;

export const SpinContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;
