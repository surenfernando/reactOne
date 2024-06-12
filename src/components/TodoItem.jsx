/* eslint-disable react/prop-types */
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for ", item);
    setTodos(todos.filter((todo) => todo != item));
  }
  function handleClick(name) {
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArr);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
