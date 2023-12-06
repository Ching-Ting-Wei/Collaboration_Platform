import React, {useState} from "react";
import Group from "../../components/Group/Group";
import GroupItem from "../../components/Group/GroupItem";
import UserHeader from "../../components/UserHeader";
import {v4 as uuidv4} from 'uuid';
uuidv4();

export default function GroupPage() {
  const [groups, setGroups] = useState([]);

  const addGroup = group => {
    setGroups([...groups, {id: uuidv4(), task: group, completed: false, isEditing: false}])
  }

  return (
    <>
      <UserHeader></UserHeader>
      <Group addGroup = {addGroup}/>
      {groups.map((group, index) => (
        <GroupItem task = {group} key = {index}/>
      ))}  
    </>
  )
}

