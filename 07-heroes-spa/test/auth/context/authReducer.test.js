import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from '../../../src/auth/types/types'


describe('testing authReducer.js', () => {

    types

    const action = {
        type: types.login,
        payload: {
            id: 'ABC',
            name: 'Rafael',
        }
    }

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Debe de (login) llamar el login autenricar y establecer el user', () => {
        const state = authReducer({}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            //user: { id: 'ABC', name: 'Rafael' }
        }


        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        console.log(newState);
        expect(newState).toEqual({ logged: false });


    });
})