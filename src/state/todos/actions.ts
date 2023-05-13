import * as todoTypes from "./types";

export function addTodo(title: string) {
  return {
    type: todoTypes.ADD_TODO,
    payload: {
      title,
    },
  };
}
export function toggleTodoStatus(id: string, completed: boolean) {
  return {
    type: todoTypes.TOGGLE_TODO_STATUS,
    payload: {
      id,
      completed,
    },
  };
}
export function toggleTodosTitle(id: string, title: string) {
  return {
    type: todoTypes.TOGGLE_TODO_TITLE,
    payload: {
      id,
      title,
    },
  };
}

export function removeTodo(id: string) {
  return {
    type: todoTypes.REMOVE_TODO,
    payload: {
      id,
    },
  };
}
