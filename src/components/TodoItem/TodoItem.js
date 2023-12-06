import React, {useState} from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Container_1 = styled.div`
  font-size: 24px;
  color: #FFF8F0;
  margin-top: 16px;
  margin-right: 40px;
`;

export default function TodoItem(props) {
    
    const [checkboxState, setCheckboxState] = useState({
        option: false,
    });
 
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxState((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
    };

    return(
         <Container_1>
            <input
            type="checkbox"
            name="option"
            checked={checkboxState.option}
            onChange={handleCheckboxChange}
            />
            新增子題目  
        </Container_1>
    )
}

