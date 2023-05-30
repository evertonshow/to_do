import { useContext } from "react";
import { useFormik } from "formik";
import TodosContext from "state/todos/Context";
import * as todosActions from "state/todos/actions";

interface FormValues {
  title: string;
}

export default function TodoCreator() {
  const { todos, dispatchTodos } = useContext(TodosContext);

  const initialValues: FormValues = {
    title: "",
    // inicializar outros campos do formulário...
  };

  const onSubmit = (values: FormValues) => {
    dispatchTodos(todosActions.addTodo(values.title));
    // Lógica de envio do formulário...
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Nova Tarefa"
        autoComplete="off"
        {...formik.getFieldProps("title")}
      />

      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}
