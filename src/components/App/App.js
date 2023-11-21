import React from "react";
import styled from "styled-components";
import {HashRouter as  Router,  Routes, Route} from "react-router-dom";
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import Header from "../Header";

const Root = styled.div`
  padding-top: 64px; 
`;

function App() {
  return(
    <Root>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Routes>
      </Router>
    </Root>
  )
}

export default App;
