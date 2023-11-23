import React from "react";
import styled from "styled-components";
import {HashRouster as  Router, Switch, Route} from "react-router-dom";




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
  vertical-align: center;
  // margin-top:280px;
  width: 375px;
  max-width: 100%;
  align-items: center;
  gap: 18px;
  padding: 0 20px;
  &&
`;

const LoginTitle = styled.div`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  margin: auto 0;
  font: 400 24px Caveat Brush, sans-serif;
`
const Content = styled.div`
  background-color: var(--main-color, #fff8f0);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default function LoginPage() {
  return(
    <Content>
      <InputContainer>
        <LoginTitle>Account</LoginTitle>
        <AccountInputBox></AccountInputBox>
      </InputContainer>
      <InputContainer>
        <LoginTitle>password</LoginTitle>
        <AccountInputBox></AccountInputBox>
      </InputContainer>
    </Content>
  )
}

// div class="login-container">
//               <div class="login-title">gamil</div>
//               <input type="text" class="login-input">
//             </div>
//             <div class="password-container">
//               <div class="password-title">password</div>
//               <input type="password" class="password-input" id="password">
//             </div>
//             <button class="login-button"  onclick="validatePassword()">log in</button>
//             <button class="signup-button">sign up</button>
//             <p id="message"></p>
//           </div>
