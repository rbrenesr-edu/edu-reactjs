import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  //const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = ()=>{
    setTodoId( todoId + 1 );
  
  }
  const PrevTodo = ()=>{
    if(todoId === 1) return;
    setTodoId( todoId - 1 );
  }

  return (
    <>
      <h1>Todos-RTK Query</h1>
      <hr />
      <h4>IsLoading: {isLoading ? "True" : "False"}</h4>

      <button onClick={nextTodo}>Next Todo</button>
      <button onClick={PrevTodo}>Prev Todo</button>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        { todos.map(todo => (
          <li key={todo.id} className='myli'>
            <strong>{todo.completed ? 'DONE ': 'Pending '}</strong>
            {todo.title}
          </li>
        )

        ) }
      </ul> */}
    </>
  );
};
