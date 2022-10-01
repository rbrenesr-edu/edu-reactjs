import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            username:'name',
            email:'@'
        });

    const { username, email } = formState;

    const onInputChange = ({target})=>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }            
  
    useEffect(()=>{
        // console.log( 'useEffectCalled' );
        }, []);

    useEffect(()=>{
        // console.log( 'formStateCalled' );
        }, [formState]);

    useEffect(()=>{
        //  console.log( 'emailCalled' );
        },[email]
    );
   


  return (
    <>  
        <h1>Simple Form</h1>
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

        { ( username === 'nameu')  &&  <Message/> }

        

    </>
  )
}
