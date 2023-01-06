import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Testing <PublicRoute />', () => { 
    test('Debe de mostrar el children, si no está autenticado', () => { 

        const contexValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contexValue }>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        
        // screen.debug();
        expect(screen.getByText('Ruta pública')).toBeTruthy();
     });

     test('Debe de navegar si se está autenticado', () => { 

      });
 })