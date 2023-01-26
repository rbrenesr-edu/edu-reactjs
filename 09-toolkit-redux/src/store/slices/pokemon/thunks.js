import { pokemonAPI } from "../../../api/pokemonApi";
import { startLoadiongPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadiongPokemons());

        //TODO: realizar peticion http

        //TRABAJANDO fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        // console.log(data);

        //TRABAJANDO con axios
        const { data } = await pokemonAPI.get(`/pokemon?limit=10&offset=${ page * 10 }`);


        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}