import React, { useState } from "react";
import { Todo } from "../App"

interface AddTodoProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function AddTodo({todos, setTodos}: AddTodoProps) {
    const [todo, setTodo] = useState("");

    const submitHandler = ((event: React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        if(todo.trim().length === 0) {
            return;
        }
        let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        let newUser: Todo ={id: newId, title: todo, status: "pending"};
        setTodos(prev => [...prev, newUser])
        setTodo("")
    });

    return (
        <form className="flex gap-2 max-w-[600px] mx-auto p-4" onSubmit={submitHandler}>
            <input className="border w-full p-2 outline-none rounded-sm focus:border-2" type="text" placeholder="Enter your task" value={todo} onChange={(e) => setTodo(e.target.value)} required />
            <button className="bg-black text-white p-2 rounded-sm cursor-pointer" type="submit">Add</button>
        </form>
    )
}

export default AddTodo