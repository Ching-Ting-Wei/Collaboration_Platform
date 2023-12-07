import React,{useEffect, useState} from "react";
import Todo from "../../components/TodoItem";
import styled from "styled-components";
import UserHeader from "../../components/UserHeader";
import axios from '../../api/axios';
const CHECK_URL = '/checkLoginStatus';

const Mask = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
`;

const P = styled.p`
  color: black;
`;


export default function UserPage() {
  const [showMask, setShowMask] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  axios.get(CHECK_URL, { withCredentials: true })
  .then(response => {
    if (response.data.loggedIn) {
      setLoggedIn(true)
      console.log(response.data)
      setUserData(response.data.user.user)
      // 如果已登入，可以根據用戶資訊執行相應的操作
    } else {
      console.log('User is not logged in');
      // 如果未登入，可以執行未登入的相應處理
    }
  })
  .catch(error => {
    console.error('Error checking login status:', error);
    // 處理錯誤情況
  });

  
  
  const toggleMask = () => {
    setShowMask(!showMask);
  };

  const handleCloseMask = () => {
    setShowMask(false);
  };


  return (
    <> 
    <UserHeader></UserHeader>
    <div>
      {loggedIn ? (
        <P>Welcome to the dashboard!!! {userData} </P>
      ) : (
        <P>Please log in to access the dashboard</P>
      )}
      <Button onClick={toggleMask}>Add HomeWork</Button>
      <Mask $show={showMask}>
	  	  <Todo handleCloseMask={handleCloseMask}></Todo>
      </Mask>
    </div>
    </>
  );
}


