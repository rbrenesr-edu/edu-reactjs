import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

const value = 100;

describe('Test ConunterApp', () => { 
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={ value }/> );
        expect( container ).toMatchSnapshot();     
     });

    test('Debe de mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={ value }/> );
        //console.log(screen.getByRole('heading', {level: 2} ).innerHTML );
        expect( screen.getByRole('heading', {level: 2} ).innerHTML ).toContain(value.toString());
        expect( screen.getByText(100)).toBeTruthy();
     });

    test('Debe de incrementar con el botón de + 1', () => { 
        render( <CounterApp value={ value }/> );
        fireEvent.click(screen.getByText('+ 1'))
        expect( screen.getByText('101')).toBeTruthy();
     });

     test('Debe de decrementar con el botón de -+ 1', () => { 
        render( <CounterApp value={ value }/> );
        fireEvent.click(screen.getByText('- 1'))
        expect( screen.getByText('99')).toBeTruthy();
     });

     test('Debe de funcionar el boton de reset', () => { 
        render( <CounterApp value={ value }/> );
        fireEvent.click(screen.getByText('- 1'));
        fireEvent.click(screen.getByText('- 1'));
        fireEvent.click(screen.getByText('- 1'));
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        
        //screen.getByText('Reset'));
        expect( screen.getByText('100')).toBeTruthy();
     });


 })