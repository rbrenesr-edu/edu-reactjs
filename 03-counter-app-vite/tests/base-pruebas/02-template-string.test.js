import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-string.js', () => {

    test('getSaludo debe retornar "Hola Rafael"', () => {

        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${ name }`);

    })
})