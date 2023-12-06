import React from "react";
import styled from "styled-components";
import {HashRouter as  Router,  Routes, Route} from "react-router-dom";
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import GroupPage from "../../pages/GroupPage";
import RegisterPage from "../../pages/RegisterPage";
import Header from "../Header";
import {ResetStyle, GlobalStyle} from '../globalStyle'

const Root = styled.div`
`;
const BG  = styled.div`
  background-color: var(--main-color, #fff8f0);
  height: 100%;
  width: 100%;
  position:absolute;
`;


// var(--main-color, #fff8f0);
function App() {
  return(
    <Root>
      <ResetStyle></ResetStyle>        
      <GlobalStyle></GlobalStyle>   
      <Router>
        <BG>
          <Routes>
            <Route element={<HomePage/>} exact path={"/"}></Route>
            <Route element={<LoginPage/>} path={"/login"}></Route>
            <Route element={<GroupPage/>} path={"/grouppage"}></Route>
            <Route element={<RegisterPage/>} path={"/register"}></Route>
          </Routes>
        </BG>
      </Router>
    </Root>
  )
}

export default App;
