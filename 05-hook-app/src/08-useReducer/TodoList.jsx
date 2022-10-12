import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], handleDeleteTodo, onToggleTodo }) => {
  return (
    <>
        <ul className="list-group">
            {
                todos.map( (todo)=>(                     
                    <TodoItem 
                      key={todo.id} 
                      todo={ todo } 
                      handleDeleteTodo={ (todo)=>handleDeleteTodo(todo) }
                      onToggleTodo={onToggleTodo }
                     />
                    ))
            }                   
        </ul>
    </>
  )
}
