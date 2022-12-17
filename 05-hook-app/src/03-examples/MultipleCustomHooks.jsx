import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const {counter, increase} = useCounter(1);

    /*const onNextQuote=()=>{
        increase(1);
    }*/

   
    let url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data, isLoading, hasError} = useFetch(url);    
    // console.log( hasError);
    const { author, quote } = !!data && data[0];


    // if(isLoading){
    //     return(
    //         <h1>Cargado...</h1>
    //     );
    // }


  return (
    <>
        <h1>MultipleCustomHooks</h1>
        <hr></hr>

        {

           (isLoading)?
                (<LoadingQuote/> )
                :
                (<Quote author={author} quote={quote} />)                
        }
        <button 
            className="btn btn-secondary"
            disabled={isLoading}
            onClick={ ()=>{increase()} }>
                Next quote
        </button>
              
    </>
  )
}


/*

<button 
className="btn btn-secondary"
onClick={onNextQuote}
>Next quote</button>

*/