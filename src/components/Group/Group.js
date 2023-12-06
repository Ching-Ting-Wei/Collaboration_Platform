import React, {useState} from "react";
import styled from "styled-components";

const GroupInput = styled.input.attrs({
    type: 'text'
})`
    outline: none;
    background: black;
    border: 1px solid #8758ff;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-left: 35rem;
    margin-bottom: 2rem;
    width: 300px;
    color: #fff;
`;

const Button = styled.button.attrs({
    type: 'submit'
})`
    background: #8758ff;
    color: #fff;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
`;

export default function TodoForm3({addGroup}){
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addGroup(value)
        setValue("")
    }

  return(
    <form onSubmit = {handleSubmit}>
        <GroupInput value = {value} onChange = {(e) => setValue(e.target.value)}/> 
        <Button> Add Group </Button>
    </form>
  )
}