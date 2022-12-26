import styles from "./TodoListTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CgRadioCheck } from "react-icons/cg";
import { useTodoDispatch, useTodoState } from "../Todo/TodoProvider";

const TodoListTools = () => {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every((todo) => todo.isChecked);
  };

  const handleToggleAllClick = () => {
    todoDispatch({
      type: "allChecked",
      payload: isTodoAllChecked(),
    });
  };

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: "allRemove",
    });
  };

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleToggleAllClick}>
        {isTodoAllChecked() ? (
          <>
            <CgRadioCheck className={styles.checkAllIcon} /> 전체해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
            전체완료
          </>
        )}
      </button>
      {/* style을 여러개 적용하고 싶을 때 다음과 같이 배열로 묶어 join(' ') 으로 구분하여 적용시킨다. */}
      <button
        className={[styles.button, styles.removeAllButton].join(" ")}
        onClick={handleRemoveAllClick}
      >
        <MdDelete className={styles.removeAllIcon} />
        전체삭제
      </button>
    </section>
  );
};

export default TodoListTools;
