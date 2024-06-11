import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  function handleDelete(item) {
    console.log("Delete button clicked for ", item);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
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
