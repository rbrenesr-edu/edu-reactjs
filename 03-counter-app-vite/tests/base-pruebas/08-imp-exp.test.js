import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de retornar heroes de DC', () => {
        const owner = 'DC';
        const h = getHeroesByOwner(owner);

        expect(h.length).toBe(3);
        expect(h).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);


        //console.log(heroes);
        expect(h).toEqual(
            heroes.filter((heroe) => heroe.owner === owner)
        );



    });

    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const h = getHeroesByOwner(owner);

        expect(h.length).toBe(2);

        //console.log(heroes);
        expect(h).toEqual(
            heroes.filter((heroe) => heroe.owner === owner)
        );



    });

})