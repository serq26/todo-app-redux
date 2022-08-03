import React from 'react';
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux/es/exports';
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function TodoList() {
  const [animationParent] = useAutoAnimate();
  const todos = useSelector(state => state.todo.todos)
  
  return (
    <ul ref={animationParent} style={{display: todos.length <= 0 ? "none": ""}}>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  )
}
