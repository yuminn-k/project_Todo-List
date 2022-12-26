import { ChangeEvent, FormEvent } from "react";
import { RiChatNewLine } from "react-icons/ri";
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from "../Todo/TodoProvider";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputState.text) {
      return;
    }

    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder={"해야할 Todo"}
          value={inputState.text}
          onChange={handleInputChanged}
        />
      </form>
      <button type="submit" className={styles.enter}>
        <RiChatNewLine />
      </button>
    </section>
  );
};

export default TodoInput;
