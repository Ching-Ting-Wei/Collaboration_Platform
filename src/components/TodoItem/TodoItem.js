import React from "react";

export default function TodoItem(props) {
    return(
        <div>
            {props.todo.title}
        </div>
    )
}