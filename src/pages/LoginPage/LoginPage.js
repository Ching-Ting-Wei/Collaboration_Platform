import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Header from "../../components/Header";





const AccountInputBox = styled.input`
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  align-self: stretch;
  width: 300px;
  height: 30px;
  font-size: large;
  padding: 10px;
`;

const InputContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  width: 375px;
  max-width: 100%;
  align-items: center;
  margin-bottom: 16px;
  gap: 18px;
`;

const PasswordInputBox = styled(AccountInputBox).attrs(
  {type: 'password'})`
 `;


const LoginTitle = styled.div`
  color: #000;
  text-align: center;
  margin: auto 0;
  font-size: 24px;

`;
const Content = styled.div`
  background-color: var(--main-color, #fff8f0);
  font-family:'Trebuchet MS';
  display: flex;
  align-items:center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position:absolute;
  top:40%;
`;

const Forget = styled.a`
  color: #4B4B4B;
  font-size: 20px;
`;

const LoginButton = styled.button`
  font-size:24px;
  margin-top:20px;
  height: 42px;
  width: 375px;
  background-color: #FF8811;
  border-radius:10px;
  box-shadow: 3px 4px 0px 0px #000;
  cursor: pointer;
`;

const SignupButton = styled(LoginButton)`
    background-color: #000000;
    color: #ffffff;
`;


export default function LoginPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    
    navigate('/grouppage')
  };

  const handleRegisterClick = () => {
    
    navigate('/register')
  };
  return(
    <>
    <Header></Header>
    <Content>
      <InputContainer>
        <LoginTitle>Account</LoginTitle>
        <AccountInputBox></AccountInputBox>
      </InputContainer>
      <InputContainer>
        <LoginTitle>Password</LoginTitle>
        <PasswordInputBox></PasswordInputBox>
      </InputContainer>

      <Forget>
        Forget password?
      </Forget>

      <LoginButton onClick={handleLoginClick}>
        Log In
      </LoginButton>

      <SignupButton onClick={handleRegisterClick}>
        Sign Up
      </SignupButton>
    </Content>
    </>
  )
}
