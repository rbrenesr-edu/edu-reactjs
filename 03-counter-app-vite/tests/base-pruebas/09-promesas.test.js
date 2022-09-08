import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test 09-promesas', () => {
    test('getHeroeByIdAsync debe retornr un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el cod no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(err => {

                expect(err).toBe(`No se pudo encontrar el héroe ${id}`);

                done();
            });
    })


})

/*el metodo done se usa para esperar el proceso aync*/