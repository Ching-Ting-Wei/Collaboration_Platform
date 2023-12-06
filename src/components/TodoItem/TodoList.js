import React from "react";
import TodoItem from './TodoItem'

function TodoList(props){
	const items = [];
	for (let i = 0; i < props.num; i++) {
		items.push(<TodoItem></TodoItem>);
	}
	
	return(items)
};

export default TodoList;