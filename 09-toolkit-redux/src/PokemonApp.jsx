import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  return (
    <>
      <h1>Pokemon APP</h1>
      <span>Loading: {isLoading ? "Cargando" : "Listo"}</span>
      <hr />
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li>
          
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        Next
      </button>
    </>
  );
};
