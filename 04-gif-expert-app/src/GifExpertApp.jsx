//t8Cg1VEQEJd1zTm4w67bKe3oE6KKRf5k
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  //const [categories, setCategories] = useState( [ '' ] )
  const [categories, setCategories] = useState( [] )

  const onAddCategory = ( newCategory ) =>{
    //categories.push('Programming');
    
    /**
     * no se recomienda hacer el push, poruqe no debemos mutar el 
     * objeto
     * 
     * formar de hacer el insert */
     //setCategories(['Hola mundo']);
     //setCategories([...categories ,'Hola']);

    /**Validar si el nuw category ya esta en el arreglo de categorias */

    if( categories.includes( newCategory ) ) return;

     setCategories( cat =>  [newCategory, ...cat]);
     console.log(newCategory);
  }
  

  return (
   <>

   {/* title */}
    <h1>GifExpertApp</h1>

    {/* input */}    
    <AddCategory 
      //setCategories = { setCategories }
      
      //onNewValue= { (event) => onAddCategory(event) }
      onNewValue= { onAddCategory }
    />     

    <button onClick={ () => onAddCategory( 'test' ) } > Agregar </button>

    {/* Listado de Gif */}    
    <ol>
      {
        categories.map (category  => 
        {

          return (

            <div key={ category }>                
              <li>{ category } </li>
            </div>
          )

        })
      }  
    </ol>
      {/* Gif items */}

   </>
  )
}
