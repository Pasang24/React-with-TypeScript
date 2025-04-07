import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  title: string;
  status: "pending" | "completed";
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <h2 className="font-bold text-center text-2xl">Task Manager</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
