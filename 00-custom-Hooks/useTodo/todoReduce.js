// const initialState = [{
//     id: 1,
//     todo: 'Primer todo',
//     done: false
// }];

// const newTodo = {
//     id: 2,
//     todo: 'Segundo todo',
//     done: false
// };


// const addTodoAction = {
//     type: '[TODO] add todo',
//     payload: newTodo
// }

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]

        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

            //throw new Error('Action.type: ABC no está implementada');

        default:
            return initialState;
    }

}