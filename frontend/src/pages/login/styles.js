import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg"

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgroundImage}) no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box; 
`;

export const FormLogin = styled.form``;

export const Wrapper = styled.div`
    width: 90%;
    max-width: 420px;
    background-color: transparent;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    margin: 20px;
`;


export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
`;

export const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 10px 10px;

    &::placeholder {
        color: #fff;
    }
`;

export const RememberForgot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px; 
    padding-top: 20px;

    @media(max-width:430px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const Label = styled.label``

export const InputLabel = styled.input`
    accent-color: #fff;
    text-decoration: none;
`
export const ForgotPassword = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    color: #333;
    font-weight: 600;
`;