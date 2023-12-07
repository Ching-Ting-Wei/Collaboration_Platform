import React, {useState} from "react";
import Group from "../../components/Group/Group";
import GroupItem from "../../components/Group/GroupItem";
import UserHeader from "../../components/UserHeader";
import {v4 as uuidv4} from 'uuid';
import axios from '../../api/axios';
import styled from "styled-components";
const CHECK_URL = '/checkLoginStatus';
uuidv4();

const P = styled.p`
  color: black;
`;

export default function GroupPage() {

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

  const [groups, setGroups] = useState([]);

  const addGroup = group => {
    setGroups([...groups, {id: uuidv4(), task: group, completed: false, isEditing: false}])
  }

  return (
    <>
      <UserHeader></UserHeader>
      {loggedIn ? (
        <P>Welcome to the dashboard!!! {userData} </P>
      ) : (
        <P>Please log in to access the dashboard</P>
      )}
      <Group addGroup = {addGroup}/>
      {groups.map((group, index) => (
        <GroupItem task = {group} key = {index}/>
      ))}  
    </>
  )
}

