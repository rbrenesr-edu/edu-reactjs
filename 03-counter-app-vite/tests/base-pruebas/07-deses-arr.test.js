import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Test 07-deses-arr', () => {

    test('Debe de retornar un string y un n[umero', () => {
        const [letters, numbers] = retornaArreglo();
        console.log(letters);

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

    })

})