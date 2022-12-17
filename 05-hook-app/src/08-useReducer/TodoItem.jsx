
export const TodoItem = ( {todo, handleDeleteTodo, onToggleTodo} ) => {
  return (
    <>
        <li 
          key={todo.id} 
          className="list-group-item d-flex justify-content-between"
          onClick={ (id)=> onToggleTodo(todo.id) }
        >
            <span 
              className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': '' }`}
              aria-label="span"
              // onClick={ (id)=> onToggleTodo(todo.id) }
            >
              { todo.description }
            </span>
            <button className="btn btn-danger" onClick={ id => handleDeleteTodo(todo.id) }>Borrar</button>
        </li>
    </>
  )
}
