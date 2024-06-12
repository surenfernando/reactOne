import { useState } from "react";
import Forms from "./Forms";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Forms todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totalTodos={totalTodos} />
      {console.log(todos)}
    </div>
  );
}
