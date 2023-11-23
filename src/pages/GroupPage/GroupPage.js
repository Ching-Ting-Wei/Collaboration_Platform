import React from "react";
import TodoItem from "../../components/TodoItem";
import styled from "styled-components";
import { useState } from 'react';
import {HashRouster as  Router, Switch, Route} from "react-router-dom";

const Mask = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
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


export default function HomePage() {
	const [showMask, setShowMask] = useState(false);

  const toggleMask = () => {
    setShowMask(!showMask);
  };

  return (
    <div>
      <Button onClick={toggleMask}>Toggle Mask</Button>
      <Mask show={showMask} onClick={toggleMask}>
				<TodoItem></TodoItem>
			</Mask>
      {/* 其他页面内容 */}
    </div>
  );
}


