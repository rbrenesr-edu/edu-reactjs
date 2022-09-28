import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test AddCategory', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewValue = { ()=>{} } /> )       
        const input = screen.getByRole( 'textbox' )
        fireEvent.input( input, { target: { value: 'One Punch' } } );
        //screen.debug();
        expect( input.value ).toBe( 'One Punch' );
     })

     test('Debe de llamar onNewCategory si el input tiene valor', () => { 

        const onNewValue = jest.fn();
        render( <AddCategory onNewValue = { onNewValue } /> );
        //screen.debug();

        const inputValue = 'Hola';                
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );
        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledWith( inputValue );

      })

      test('No debe llamar el OnNewCategory si el input está vacio', () => { 
        
        const onNewValue = jest.fn();
        render( <AddCategory onNewValue = { onNewValue } /> );   
        const inputValue = '';                
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onNewValue ).toHaveBeenCalledTimes(0);
        expect( onNewValue ).not.toHaveBeenCalled();
       })

 })