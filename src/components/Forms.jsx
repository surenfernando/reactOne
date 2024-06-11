import { useState } from "react";
import styles from "./forms.module.css";
export default function Forms({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    // console.log(todos);
  }
  return (
    <div>
      <form className={styles.todoform} action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Enter To-Do Item"
            className={styles.modernInput}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
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
