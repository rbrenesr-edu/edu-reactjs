import { HeroCard } from './';
import { getHeroresByPublishers } from '../helpers'
import { useMemo } from 'react';


export const HeroeList = ({ publisher }) => {

  const heroes = useMemo( ()=> getHeroresByPublishers(publisher), [publisher]);  
  

  return (
    <>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( (heroe)=>(                     
                  
                  <HeroCard
                   key={heroe.id}
                   {...heroe}
                  />
                ))
            }                   
        </div>
    </>
  )
}
