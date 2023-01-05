import { HeroeList } from '../componets'

export const MarvelPage = () => {
  const publisher = 'Marvel Comics';
    
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />     
      <HeroeList publisher={publisher} />
    </>
  )
}

