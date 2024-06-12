import { useState } from "react";
import Forms from "./Forms";
import TodoList from "./TodoList";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Forms todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {console.log(todos)}
    </div>
  );
}
