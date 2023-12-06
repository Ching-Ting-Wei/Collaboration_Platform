import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Container = styled.div`
  box-sizing: border-box;
  max-height: 440px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top:25%;
`;

const Content = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
  box-shadow: 7px 9px 0px 0px #000;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  padding: 0 31px 0 25px;
`;

const HomeworkTitle = styled.div`
    font-size:44px;
    color: #FFF8F0;
    text-align: center;
    margin-top: 12px;
`;

const TodoContainer = styled.div`
    height: 100%;
    overflow-y: scroll;
`;

const Actions = styled.div`
  display: flex;
  width: 236px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 25px 0 9px 12px;
`;

const Button = styled.button.attrs({
  type: 'reset'
})`
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
  cursor: pointer;

`;

const OrangeButton = styled(Button).attrs(
  {type: 'submit'})
  `
  color: black;
  background-color: var(--main-color, #FF8811);
  cursor: pointer;
`;


export default function TodoForm2(props){
  
  const {currentStep, setNum, setTitle, num} = props
  

  

  if(currentStep !== 2){
    return null
  }

  const handleFinish = (e) => {
   setNum('')
   setTitle('')
   props.handleNext()
   props.handleCloseMask()
  }

  const handleNumChange = (e) => {
    setNum(e.target.value)
   }

  const handleSubmit = e =>{
    e.preventDefault()
  }

	return(
    <Container>
      <Content onSubmit={handleSubmit}>
        <HomeworkTitle>
          {props.title}
        </HomeworkTitle>
        <TodoContainer>
          <TodoList num={num}/>
        </TodoContainer>
        <Actions>
          <Button onClick={props.handlePrevious}>返回</Button>
          <OrangeButton onClick={handleFinish}>下一步</OrangeButton>
        </Actions>
      </Content>
    </Container>
	);
}