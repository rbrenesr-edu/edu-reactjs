import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

const title = 'Title FirstApp';
const subTitle = 'subTitle';

describe('Test FirstApp', () => { 
    test('Debe hacer match con el snapshopt', () => { 

        const { container } = render( <FirstApp title={title}/> );
        expect( container ).toMatchSnapshot();        
    });

    test('Debe mostrar el mensaje Test FirstApp', () => { 
        //screen.debug();
        render( <FirstApp title={title}/> );
        //screen.debug();        
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {         
        render( <FirstApp title={title}/> );        
        expect( screen.getByRole('heading', {level: 1} ).innerHTML ).toContain(title);
    });

    test('Debe mostrar el subtítulo por props', () => {         
        
        render( 
        <FirstApp 
            title={title}
            subTitle = { subTitle }
            /> 
        );
        
        expect(screen.getAllByText(subTitle).length ).toBe(2);
        
    });

 });