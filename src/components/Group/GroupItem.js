import styled from "styled-components";

const Item = styled.a`
  margin-left: 10px;
  margin-top: 10px;
  display: inline-block;
  padding: 60px;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  background-color: white;
  color: black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  color: black;
`;

export default function Todo({task}){
  return(
      <Item> {task.task} </Item>
  )
}
