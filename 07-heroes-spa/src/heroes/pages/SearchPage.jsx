import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../componets';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  
const showSearch = (q.length === 0);
const showError = (q.length > 0) && heroes.length === 0;



  const { searchText, onInputChange } = useForm(
    {
      searchText:q
    }
  );
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if( searchText.trim().length <=1 ) return;
    navigate(`?q=${ searchText }`); 
  }

  return (
    <>
        <h1>SearchPage</h1>
        <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit } >
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
            >
            </input>
            <button
            className="btn btn-outline-primary mt-3"
            >Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          <div className="alert alert-primary animate__animated animate__fadeIn" role="alert" style={{ display: showSearch ? '': 'none' }}>
            <h4 className="alert-heading">Result</h4>
            <p>Search a hero</p>
            <p className="mb-0"></p>
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" role="alert" style={{ display: showError ? '': 'none' }}>
            <h4 className="alert-heading">Result</h4>
            <p>No hero with { q }</p>
            <p className="mb-0"></p>
          </div>

          {
            heroes.map( hero => (  <HeroCard key={ hero.id } { ...hero } /> ) )
          }

        </div>

      </div>
      
    </>
    
  )
}
