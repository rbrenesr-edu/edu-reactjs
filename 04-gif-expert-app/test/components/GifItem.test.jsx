import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test GifItem', () => { 

    const titulo = 'Titulo';
    const url = 'http://localhost/ulr_dir';

    test('Match con el snapshot', () => { 

        const { container } = render( <GifItem title={ titulo } url={ url }/> );
        expect( container ).toMatchSnapshot();
     })

     test('Debe mostrar la imagen y el url indicado', () => { 
        //console.log({ titulo, url } );
        render( <GifItem title={ titulo } url={ url }/> );
        //screen.debug();  
        //expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

      });

      test('Debe de mostrar el título en el componente', () => { 
        screen.debug();  
        render( <GifItem title={ titulo } url={ url }/> );
        expect( screen.getByText( titulo ) ).toBeTruthy();

       })

 })