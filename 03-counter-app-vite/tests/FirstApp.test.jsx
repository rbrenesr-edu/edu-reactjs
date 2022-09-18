import { getByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test FirstApp', () => { 
    /*test('Debe hacer match con el snapshopt', () => { 

        const title = 'Title FirstApp';
        const { container } = render( <FirstApp title={title}/> );
        expect( container ).toMatchSnapshot();        
    });*/

    test('Debe mostrar el titulo en un h1', () => { 

        const title = 'Title FirstApp';
        const subTitle = 'subTitle';
        const { container, getByText, getByTestId } = 
        render( 
                <FirstApp 
                    title={title}
                    subTitle = { subTitle }
                /> 
            );
        expect( getByText(title) ).toBeTruthy();

        /*const h1 = container.querySelector('h1');        
        console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain(title);*/
        expect(getByTestId('test-title')).toBeTruthy();
        //console.log(getByTestId('test-title').innerHTML);
        expect(getByTestId('test-title').innerHTML).toBe(title);


    });

    test('Debe mostrar el subtitulo enviado pro props', () => { 

        const title = 'Title FirstApp';
        const subTitle = 'subTitle';
        const { getByText, getAllByText } = render( 
        <FirstApp 
            title={title}
            subTitle = { subTitle }
            /> 
        );
        expect( getAllByText(subTitle).length ).toBe(2);

        /*const h1 = container.querySelector('h1');        
        console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain(title);*/
        //expect(getByTestId('test-title')).toBeTruthy();
        //console.log(getByTestId('test-title').innerHTML);
       // expect(getByTestId('test-title').innerHTML).toBe(title);


    });

 });