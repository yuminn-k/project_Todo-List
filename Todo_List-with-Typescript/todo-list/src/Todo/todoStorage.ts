import { TodoType } from "./todoReducer";

export const saveTodos = (todos: TodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(todos)); // JSON 형태의 객체를 String화하고 직렬화시킨 값을 localStorage에 저장
};

export const loadTodos = () => {
  const todoJson = localStorage.getItem("todos");

  if (!todoJson) {
    return [];
  }

  try {
    return JSON.parse(todoJson); // 다시 객체화
  } catch (e) {
    console.error(e);
    return []; // 에러 발생할 경우 빈 객체 반환
  }
};
