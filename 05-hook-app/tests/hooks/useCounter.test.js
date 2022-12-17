import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";

describe('Test in useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increase, deincrement, reset } = result.current;

        expect(counter).toBe(1);
        expect(deincrement).toEqual(expect.any(Function));
        expect(increase).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('increase: debe de incrementar el counter', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increase } = result.current;
        act(() => {
            increase();
            increase(5);
        });

        let counterActual = result.current.counter;
        //expect(counterActual).toBe(2);
        expect(counterActual).toBe(7);

    });

    test('deincrease: debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, deincrement } = result.current;
        act(() => {
            deincrement();
        });

        let counterActual = result.current.counter;
        //expect(counterActual).toBe(2);
        expect(counterActual).toBe(0);

    });


    test('reset: debe restablecer el valor del contador', () => {
        const { result } = renderHook(() => useCounter(1));
        const { counter, deincrement, reset } = result.current;
        act(() => {
            deincrement();
            reset();
        });

        let counterActual = result.current.counter;
        expect(counterActual).toBe(1);

    });
})