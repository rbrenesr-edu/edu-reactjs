//t8Cg1VEQEJd1zTm4w67bKe3oE6KKRf5k
import { useState } from "react";
import { AddCategory, GifGrid  } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch'] )
  const onAddCategory = ( newCategory ) =>{
    if( categories.includes( newCategory ) ) return;
     setCategories( cat =>  [newCategory, ...cat]);     
  }
  

  return (
   <>
    <h1>GifExpertApp</h1>

    <AddCategory onNewValue= { onAddCategory } />  

    {categories.map (( category ) => (      
        <GifGrid          
          key={category}  
          category = { category }         
        />
      ))}  

   </>
  )
}
