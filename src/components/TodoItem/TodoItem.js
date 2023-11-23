import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border-radius: 20px;
  box-shadow: 7px 9px 0px 0px #000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 31px 0 25px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Header = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 28px;
  align-items: center;
  justify-content: space-between;
  gap: 11px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  color: var(--main-color, #fff8f0);
  text-transform: uppercase;
  margin: auto 0;
  font: 400 24px/30px Caveat Brush, sans-serif;
`;

const Subtitle = styled.div`
  color: #000;
  white-space: nowrap;
  border-radius: 10px;
  background-color: var(--main-color, #fff8f0);
  align-self: stretch;
  flex-grow: 1;
  align-items: start;
  padding: 10px 15px;
  font: 400 24px/30px Caveat Brush, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TotalQuestions = styled.div`
  color: var(--main-color, #fff8f0);
  text-transform: uppercase;
  align-self: stretch;
  margin-top: 20px;
  white-space: nowrap;
  font: 400 24px/30px Caveat Brush, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Actions = styled.div`
  display: flex;
  width: 236px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 25px 0 9px;
`;

const Button = styled.div`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 20px;
  box-shadow: 3px 4px 0px 0px #000;
  background-color: var(--main-color, #fff8f0);
  align-items: center;
  padding: 9px 20px;
  font: 400 20px/25px Caveat Brush, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const WhiteButton = styled(Button)`
  color: black;
  background-color: var(--main-color, #FF8811);
`;

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export default function TodoItem(){
	const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
	const handleInputChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleAddTodo = () => {
		if (newTodo.trim() !== '') {
			setTodos([...todos, newTodo]);
			setNewTodo('');
		}
	};
		
	return(
	<Container>
		<Header>
			<Title>作業名稱：</Title>
			<Subtitle>dd hw02</Subtitle>
			<TodoList>
			<InputField
				type="text"
				placeholder="Add a new todo"
				value={newTodo}
				onChange={handleInputChange}
			/>
			 <Button onClick={handleAddTodo}>Add Todo</Button>
          {todos.map((todo, index) => (
            <TodoItem key={index}>{todo}</TodoItem>
          ))}
			</TodoList>
		</Header>
		<TotalQuestions>共有 5 大題</TotalQuestions>
		<Actions>
			<Button>返回</Button>
			<WhiteButton>下一步</WhiteButton>
		</Actions>
	</Container>
	);
}