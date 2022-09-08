//Promesas
import { getHeroebyId } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //console.log('2 segundos después'); 
//         //Terea
//         //import el 
//         const heroe = getHeroebyId(2);
//         //console.log(heroe);
//         //resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 1000)
// });

// promesa
//     .then((heroe) => { console.log('heroe', heroe); })
//     .catch(err => console.log(err))




const getHeroeByIdAsunc = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroebyId(id);
            heroe ?
                resolve(heroe) :
                reject('No se pudo encontrar el heroe');
        }, 1000)
    });
}

getHeroeByIdAsunc(1)
    .then(console.log)
    .catch(console.warn)
    //.catch(err => console.warn(err))