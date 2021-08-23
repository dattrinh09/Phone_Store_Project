import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
    background: #fff;
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const FormWrapper = styled.div`
    margin-top: 0;
    background-color: #101522;
    min-width: 1000px;
    min-height: 600px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 5px;
`;

export const FormHeading = styled.h2`
    color: #4b59f7;
    text-align: center;
    margin: 30px 0px 30px 0px;
`;

export const FormItems = styled.div`
    margin: 15px;
    color: #969292;
    font-size: 16px;
`;

export const FormInputLabel = styled.div`
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
`

export const FormInput = styled.input`
    color: #fff;
    background-color: #101522;
    height: 38px;
    font-size: 20px;
    outline: none;
    width: 100%;
    border: 1px solid #fff;
`;

export const FormButton = styled.button`
    display: flex;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
    padding: 10px 60px;
    background: #4b59f7;
    margin: auto;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.1s;
`;

export const FormAlert = styled.p`
    text-align: center;
    align-items: center;
    color: red;
    font-size: 18px;
`;

export const CloseButon = styled(Link)`
    padding-top: -8px;
    padding-left: 900px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`;



