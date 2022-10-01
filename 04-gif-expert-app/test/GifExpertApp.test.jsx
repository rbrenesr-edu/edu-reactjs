const { render, screen } = require("@testing-library/react")
const { GifExpertApp } = require("../src/GifExpertApp")


describe('Testing GifExpertApp', () => { 
    test('should first', () => { 
        render(<GifExpertApp/>);
        screen.debug();        
        expect(screen.getAllByRole( 'textbox' ).length).toBeGreaterThan(0);
        expect(screen.findByText( ' Cargando...' )).toBeTruthy();

     })
 })