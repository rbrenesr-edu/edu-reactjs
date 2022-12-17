import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test en TodoItem', () => { 

    const todo={
        id:1,
        description:'Curso de reactjs',
        done:false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks() );

    test('Debe de mostrar el TODO pendiente de completar', () => { 
        render(
            <TodoItem 
                todo={todo} 
                handleDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
                />
        );

        const liElement = screen.getByRole('listitem');    
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        
     });

     test('Debe de mostrar el TODO completado', () => { 

        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                handleDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
                />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
        
     });

     test('Se debe de llamar ToggleTodo cuando se hace click', () => { 
        render(
            <TodoItem 
                todo={todo} 
                handleDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
                />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );

      });


      test('El boton debe de llamar el DeleteTodo', () => { 
        render(
            <TodoItem 
                todo={todo} 
                handleDeleteTodo = { onDeleteTodoMock } 
                onToggleTodo = { onToggleTodoMock }
                />
        );
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );
        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );

      });

 });