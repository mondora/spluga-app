import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 5px;
    color: white;
    background: url("https://spluga.io/img/bg-pattern.png"), #986c6a;
    background: url("https://spluga.io/img/bg-pattern.png"),
        -webkit-gradient(linear, right top, left top, from(#986c6a), to(#bfbccb));
    background: url("https://spluga.io/img/bg-pattern.png"), linear-gradient(to left, #986c6a, #bfbccb);
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const User = styled.div`
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AvatarContainer = styled.div`
    padding: 0px 5px;
`;
