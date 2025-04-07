import { Todo } from "../App";
import TodoItem from "./Todo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div className="flex flex-col max-w-[600px] mx-auto p-4 text-xl">
      {todos.length === 0 && <div className="text-center font-bold">No Tasks!</div>}
      {todos.map((todo) => {
        return <TodoItem todo={todo} setTodos={setTodos} />;
      })}
    </div>
  );
}

export default TodoList;
