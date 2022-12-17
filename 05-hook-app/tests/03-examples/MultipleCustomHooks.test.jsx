import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/Hooks/useCounter';
import { useFetch } from '../../src/Hooks/useFetch';


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('MultipleCustomHooks.jsx testing', () => { 

    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increase: mockIncrement,
    });

    beforeEach( ()=>{
        jest.clearAllMocks();
    } );


    test('should show default initial value', () => { 
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
       
        render(<MultipleCustomHooks/>);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('MultipleCustomHooks') );

        const nextButton = screen.getByRole('button', { name:'Next quote' });        
        expect(nextButton.disabled).toBeTruthy();
        //screen.debug();
     });

     test('should show a Quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{author: 'Rafael', quote:'Hola'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hola')).toBeTruthy();
        expect(screen.getByText('Rafael')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name:'Next quote' });        
        expect(nextButton.disabled).toBeFalsy();

      });

      test('Debe de llamar la función de incrementar', () => { 

            useFetch.mockReturnValue({
                data: [{author: 'Rafael', quote:'Hola'}],
                isLoading: false,
                hasError: null
            });
           

            render(<MultipleCustomHooks/>);
            const nextButton = screen.getByRole('button', { name:'Next quote' });   
            fireEvent.click(nextButton);
            expect(mockIncrement).toHaveBeenCalled();

       });
     
 })