import { useState } from "react";
import styles from "./forms.module.css";
export default function Forms({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({
      name: "",
      done: false,
    });
    // console.log(todos);
  }
  return (
    <div>
      <form className={styles.todoform} action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Enter To-Do Item"
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
