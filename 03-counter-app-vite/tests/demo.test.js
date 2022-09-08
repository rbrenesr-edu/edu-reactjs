describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no debe fallar', () => {

        /*if (0 === 0) {
            throw new Error('No puede dividir entre cero');
        }*/
        //1. Inicializacion
        const m = 'Hola mundo';
        //2. Estimulo
        const m2 = m.trim();

        //3. Observr el comportamiento esperado
        expect(m).toBe(m2);

    });

});