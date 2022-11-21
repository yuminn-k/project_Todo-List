export type TodoInputStateType = {
  text: string;
};

// change, clear
export type TodoInputActionType =
  | {
      type: "change";
      payload: string;
    }
  | {
      type: "clear";
    };

export const todoInputReducer = (
  state: TodoInputStateType,
  action: TodoInputActionType
) => {
  switch (action.type) {
    case "change":
      return {
        text: action.payload,
      };
    case "clear":
      return {
        text: "",
      };
  }
};
