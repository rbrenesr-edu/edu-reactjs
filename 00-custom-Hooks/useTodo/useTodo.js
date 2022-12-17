import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReduce";

export const useTodo = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description:'Todo uno',
        //     done: false
        // },
        // {
        //     id: new Date().getTime() * 3,
        //     description:'Todo dos',
        //     done: false
        // }
    ];

    const init = () => {
        return JSON.parse(localStorage.getItem('Todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    useEffect(() => {

        localStorage.setItem('Todos', JSON.stringify(todos));

    }, [todos])


    const handleNewTodo = (Todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: Todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }

    const todosCount = () => {
        return todos.length;
    }

    const todosPend = () => {
        return todos.filter(todo => !todo.done).length;
    }


    return {
        todos,
        todosCount: todosCount(),
        todosPend: todosPend(),
        handleToggleTodo,
        handleDeleteTodo,
        handleNewTodo
    }

}