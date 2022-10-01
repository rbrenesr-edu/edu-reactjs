import { useEffect } from 'react';
import { useForm } from '../Hooks/useForm';

export const FormWithCustomHook = () => {

    //const { formState, onInputChange, username, email, password } =  useForm({
    const { formState, onInputChange, onResetForm } =  useForm({
        username:'',
        email:'',
        password:''
    });

    const { username, email, password} = formState;

  return (
    <>  
        <h1>FormWithCustomHook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username" 
            value={ username }
            onChange={ onInputChange }/>
        
        <input 
            type="email"
            className="form-control mt-4"
            placeholder="@"
            name="email" 
            value={ email }
            onChange={ onInputChange }/>

        <input 
            type="password"
            className="form-control mt-4"
            placeholder="Contraseña"
            name="password" 
            value={ password }
            onChange={ onInputChange }/>        
       
       <button 
       className='btn btn-secondary mt-4'
       onClick={ onResetForm }>Borrar</button>
                
    </>
  )
}
