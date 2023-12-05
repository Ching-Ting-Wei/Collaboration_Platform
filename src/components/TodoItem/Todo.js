import React, {useState} from "react";
import Step1 from "./TodoForm1";
import Step2 from './TodoForm2';
import TodoList from "./TodoList";


const initialState = [
	{id: 1, title: 'totototo'},
	{id: 2, title: 'toto1232o'},
	{id: 3, title: 'toto1231231o'}
]


function Todo({ handleCloseMask}){
  const [todoList, setTodoList] = useState(initialState)
  const [num, setNum] = useState('')
  const [title, setTitle] = useState('')
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`Your registration detail: \n 
      num: ${num} \n 
      title: ${title} \n 
    `)
  }

  const handleNext = () => {
    let step = currentStep >= 2? 3: currentStep + 1
    setCurrentStep(step)
    console.log(`Your registration detail: \n 
      num: ${num} \n 
      title: ${title} \n 
    `)
  }
  const handlePrevious = () => {
    let step = currentStep <= 1? 1: currentStep - 1
    setCurrentStep(step)
  }




  return(
    <>
      <TodoList todos = {todoList}/>

      <Step1 currentStep={currentStep}
        num={num}
        setNum={setNum}
        title={title}
        setTitle={setTitle}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
        handleCloseMask = {handleCloseMask}
      />
      <Step2 currentStep={currentStep}
        num={num}
        title={title}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        setCurrentStep={setCurrentStep}
      />
    </>
  )

}

export default Todo;