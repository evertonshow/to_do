import * as todoTypes from "./types";
import useId from "react-id-generator";

function reducer(
  state: any,
  action: {
    type: string;
    payload: { title: string; completed: boolean; id: string };
  }
) {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return state.concat({
        id: useId(),
        title: action.payload.title,
        completed: false,
      });

    case todoTypes.TOGGLE_TODO_STATUS:
      return state.map((todo: { id: string; completed: boolean }) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        } else {
          return todo;
        }
      });

    case todoTypes.TOGGLE_TODO_TITLE:
      return state.map((todo: { id: string; title: string }) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        } else {
          return todo;
        }
      });

    case todoTypes.REMOVE_TODO:
      return state.filter(
        (todo: { id: string; title: string; completed: boolean }) => {
          return todo.id !== action.payload.id;
        }
      );
    default:
      throw new Error();
  }
}
export default reducer;
