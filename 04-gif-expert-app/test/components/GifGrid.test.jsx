import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test GifGrid', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 

       useFetchGifs.mockReturnValue({ 
        images: [],
        isLoading: true
       });

       render( <GifGrid category={ category } /> ) ;
       //screen.debug();

       expect( screen.getByText( 'Cargando...' ) );
       expect( screen.getByText( category ) );

     });

     test('Debe de mostrar ítems cuando se cargan las imagenes useFetchGifs', () => { 
        

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url:'https://imagenes.goku.jpg'
            },
            {
                id: '123',
                title: 'Saitama',
                url:'https://imagenes.goku.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({ 
            images: gifs,
            isLoading: false
           });

        render( <GifGrid category={ category } /> ) ;
        //screen.debug();

           expect( screen.getAllByRole('img').length ).toBe( 2 );

      })

 })