
import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  
  const { todoDescription, onInputChange, onResetForm } = useForm({
    todoDescription: "",
    todoDescription2: "",
  });

  const onFormSutmit = (event) => {
    event.preventDefault();

    if (todoDescription.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: todoDescription,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSutmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="todoDescription"
          value={todoDescription}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};
