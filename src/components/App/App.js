import React from "react";
import styled from "styled-components";
import {HashRouter as  Router,  Routes, Route} from "react-router-dom";
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import Header from "../Header";
import {ResetStyle, GlobalStyle} from '../globalStyle'
const Root = styled.div`
`;

function App() {
  return(
    <Root>
      <ResetStyle></ResetStyle>        
      <GlobalStyle></GlobalStyle>   
      <Router>
        <Header/>
        <Routes>
          <Route element={<HomePage/>} exact path={"/"}></Route>
          <Route element={<LoginPage/>} path={"/login"}></Route>
        </Routes>
      </Router>
    </Root>
  )
}

export default App;
