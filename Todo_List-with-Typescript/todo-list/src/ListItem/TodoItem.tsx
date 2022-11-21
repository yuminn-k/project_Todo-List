import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useTodoDispatch } from "../Todo/TodoProvider";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();

  const handleToggleClick = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: props.id,
      },
    });
  };

  const handleRemoveClick = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <li className={styles.container}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          `${
            props.isChecked
              ? styles.checkedCircleIcon
              : styles.unCheckedCircleIcon
          }`,
        ].join(" ")}
        onClick={handleToggleClick}
      />
      <span className={props.isChecked ? styles.strikethrough : ""}>
        {props.text}
      </span>
      <IoMdRemoveCircleOutline
        className={styles.removeIcon}
        onClick={handleRemoveClick}
      />
    </li>
  );
};

export default TodoItem;
