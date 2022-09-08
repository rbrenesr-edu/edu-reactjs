import heroes, { owners } from '../data/heroes.js';

//console.log(owners);

// import { heroes } from './data/heroes';
//console.log(heroes);
export const getHeroebyId = (id) => heroes.find((x) => x.id === id);
//console.log(getHeroebyId(1));

export const getHeroebyOwner = (id) => heroes.filter((x) => x.owner === id);
//console.log(getHeroebyOwner('DC'));