import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/Hooks/useForm";

describe('useForm testing', () => {

    const initialForm = {
        name: 'Rafael',
        email: 'rbrenesr@gmail.com'
    }

    test('should be retorn default data', () => {
        const { result } = renderHook(() => useForm(initialForm));
        //console.log(result);

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('should be retorn name changed', () => {
        const newName = 'Julieth';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        //console.log(result);
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
        });

        //console.log(result);
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    });

    test('should be send reset funtion', () => {
        const newName = 'Julieth';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        //console.log(result);
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
        });

        //console.log(result);
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);

        act(() => {
            onResetForm();
        });

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

})