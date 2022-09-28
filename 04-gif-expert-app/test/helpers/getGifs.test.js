import { any } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Test getGifs', () => {
    test('Deben retornar un [] de gifs', async() => {

        const gifs = await getGifs('hola');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})