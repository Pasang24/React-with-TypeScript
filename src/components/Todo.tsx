import React from "react";
import { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoItem({ todo, setTodos }: TodoItemProps) {
  const handleStatusChange = () => {
    let newStatus: Todo["status"] =
      todo.status === "completed" ? "pending" : "completed";

    setTodos((prev) => {
      return prev.map((item) =>
        item.id === todo.id ? { ...item, status: newStatus } : item
      );
    });
  };

  const handleDelete = () => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== todo.id);
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <input
          onChange={handleStatusChange}
          checked={todo.status === "completed"}
          type="checkbox"
          className="cursor-pointer"
        />
        <span>{todo.title}</span>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
