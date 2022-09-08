//Desestructuración
//Aignación Desestrcuturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};
/*


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { nombre } = persona;

console.log(nombre);


const retornaPersonal = (usuario) => {
    console.log(usuario);
}

retornaPersonal(persona);


const retornaPersonalNombre = ({ nombre, edad, rango = 'cap' }) => {
    console.log(nombre, edad, rango);
}

retornaPersonalNombre(persona);



const retornaPersonalNom = ({ clave, nombre, edad, rango = 'cap' }) => {
    return {
        nombreClave: clave,
        anios: edad
    };
}

const avenger = retornaPersonalNom(persona);
console.log(avenger);




*/

const useContext = ({ clave, nombre, edad, rango = 'cap' }) => {
    return {
        nombreClave: clave,
        anios: edad
    };
}

const { nombreClave, anios } = useContext(persona);
console.log(nombreClave, anios);