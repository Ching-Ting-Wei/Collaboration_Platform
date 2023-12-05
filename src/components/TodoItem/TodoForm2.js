import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top:40%;
`;

const Content = styled.form`
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

const InputTitle = styled.input.attrs({
  type:"text",
  name:"title"
})`
  color: #000;
  border-radius: 10px;
  background-color: #fff8f0;
  align-items: start;
  font-size:24px;
  height: 36px;
  width: 384px;
  padding-left: 8px;
`;

const TotalQuestions = styled.div`
  color: #fff8f0;
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-top: 20px;
  font-size: 24px;
`;

const InputQuestion = styled.input.attrs({
  name: 'num',
})`
  height: 36px;
  width: 104px;
  border-radius:10px;
  margin-left: 8px;
  margin-right:8px;
  background-color: #fff8f0;
  font-size: 20px;
  padding-left: 8px;
`;

const Actions = styled.div`
  display: flex;
  width: 236px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 25px 0 9px;
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
  
  const {currentStep, setNum, setTitle, title, num} = props
  

  if(currentStep !== 2){
    return null
  }

  const handleTitleChange = (e) => {
   setTitle(e.target.value)
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
        <Header>
          <Title>Test：</Title>
          <InputTitle onChange={handleTitleChange}></InputTitle>
        </Header>
        <TotalQuestions>
          共有
          <InputQuestion onChange={handleNumChange}></InputQuestion>
          大題
        </TotalQuestions>
        <Actions>
          <Button onClick={props.handlePrevious}>返回</Button>
          <OrangeButton onClick={props.handleNext}>下一步</OrangeButton>
        </Actions>
      </Content>
    </Container>
	);
}