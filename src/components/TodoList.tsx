import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div>
      {todos.length === 0 && <span>No Tasks</span>}
      {todos.map((todo) => {
        return <span>{todo.title}</span>;
      })}
    </div>
  );
}

export default TodoList;
