
import { useTodo } from '../Hooks'
import { TodoList, TodoAdd } from './index'

export const TodoApp = () => {

    const {todos,todosCount,todosPend, handleDeleteTodo,handleToggleTodo ,handleNewTodo} = useTodo();

    return (
    <>
        <h1>ToDoApp: { todosCount } <small>pendientes: <text className='text-danger'>{ todosPend }</text></small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                todos = { todos} 
                handleDeleteTodo={ (todo)=> handleDeleteTodo(todo) } 
                onToggleTodo={ handleToggleTodo }
            />                
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />                
                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>
    </>
    )
}
