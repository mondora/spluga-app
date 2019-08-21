import styled from "styled-components";

export const CompanyFormContainer = styled.form`
    display: grid;
    grid-template-columns:40%
    justify-items: stretch;

    & .ant-form-item-label {
        line-height: 20px;
    }

    & .ant-form-item-label label:after {
        content: "";
    }

    & .ant-form-item {
        margin: 0px;
    }
`;

export const Title = styled.div`
    font-weight: bolder;
    font-size: 20px;
`;
export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    margin-bottom: 15px;

    & > div:nth-child(odd) {
        padding-right: 20px;
    }

    & > div:nth-child(even) {
        padding-left: 20px;
    }

    & .ant-calendar-picker {
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
