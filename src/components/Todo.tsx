import React from 'react'
import { Todo } from '../App'

interface TodoItemProps {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoItem({todo, setTodos}: TodoItemProps) {
  return (
    <div>{todo.title}</div>
  )
}

export default TodoItem