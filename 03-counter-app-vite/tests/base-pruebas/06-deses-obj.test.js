import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test 06-deses-obj.test', () => {

    test('usContext debe retornar un objeto', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const { nombreClave, anios, latlng: { lat, lng } } =
        usContext(persona);


        expect(persona.clave).toEqual(nombreClave);
    })

})