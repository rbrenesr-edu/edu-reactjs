import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test useFetchGifs', () => {
    test('Debe de regresar el estado inicial', async() => {

        const { result } = renderHook(() => {
            return useFetchGifs('Hola');
        })

        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


    });

    test('Debe de regresar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook(() => {
            return useFetchGifs('Hola');
        })



        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).not.toBeTruthy();


    })


})