import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">   



      <div className="card">
        <div className="row">


          <div className="col-4">
            <img src={ heroImageUrl } className="card-img" alt={ superhero }></img>
          </div>

          <div className="cal-8">

             <div className="div card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-test">{alter_ego}</p>
                {(alter_ego !== characters) && ( <p className="card-test">{characters}</p> ) }
                <p className="card-text"><small className="text-muted">{ first_appearance }</small></p>
                 <Link to={`/hero/${ id }`}>Más...</Link>
             </div>
             
          </div>

        </div>
      </div>


      
    </div>
  )
}



