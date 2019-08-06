import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Title = styled.div`
  font-weight: bolder;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const Label = styled.label`
  text-align: left;
  flex-direction: column;
  font-weight: bolder;
  margin-right: 5px;
  flex: 1;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid grey;
  flex: 2;
`;

export const Error = styled.label`
  display: flex;
  color: red;
  font-weight: bolder;
  margin-left: 5px;
  flex: 3;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  border-radius: 4px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
`;
