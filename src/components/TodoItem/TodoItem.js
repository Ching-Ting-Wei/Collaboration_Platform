import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: #fff8f0;
  top:40%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  height: 200px;
  width: 560px;
  box-shadow: 7px 9px 0px 0px #000;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  padding: 0 31px 0 25px;

`;

const Header = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 28px;
  align-items: center;
`;

const Title = styled.div`
  color: var(--main-color, #fff8f0);
  text-transform: uppercase;
  margin: auto 0;
  font: 400 24px/30px Caveat Brush, sans-serif;
`;

const Subtitle = styled.input`
  color: #000;
  white-space: nowrap;
  border-radius: 10px;
  background-color: #fff8f0;
  align-items: start;
  font-size:24px;
  height: 36px;
  width: 384px;
`;

const TotalQuestions = styled.div`
  color: #fff8f0;
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-top: 20px;
  white-space: nowrap;
  font-size: 24px;
`;

const InputQuestion = styled.input`
  height: 36px;
  width: 104px;
  border-radius:10px;
  margin-left: 8px;
  margin-right:8px;
  background-color: #fff8f0;
  font-size: 20px;
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
      <Content>
      <Header>
        <Title>作業名稱：</Title>
        <Subtitle></Subtitle>
      </Header>
      <TotalQuestions>
        共有
        <InputQuestion></InputQuestion>
        大題
      </TotalQuestions>
      <Actions>
        <Button>返回</Button>
        <WhiteButton>下一步</WhiteButton>
      </Actions>
    </Content>
    </Container>
	);
}