const initialState = [{
    id: 1,
    todo: 'Primer todo',
    done: false
}];

const newTodo = {
    id: 2,
    todo: 'Segundo todo',
    done: false
};


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}



const todoReduce = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReduce();
todos = todoReduce(todos, addTodoAction);

console.log({ state: todos });