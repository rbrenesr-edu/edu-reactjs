import { todoReducer } from "../../src/08-useReducer/todoReduce";



describe('testing todoReduce', () => {

    const initialStatte = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialStatte, {});
        expect(newState).toBe(initialStatte);

    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialStatte, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: 1
        };

        const newState = todoReducer(initialStatte, action);

        expect(newState.length).toBe(0);
    });

    test('Debe de realizar el Toggle del TODO', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };

        const newState = todoReducer(initialStatte, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);

    });
})