//Funciones en JS
const saludar = function(nombre) {
    return `Hola,  ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola,  ${nombre}`;
}

const saludar3 = (nombre) => `Hola,  ${nombre}`;
const saludar4 = () => `Hola sin nombre`;



//saludar = 30;

console.log(saludar);
console.log(saludar2('Rafa'));
//console.log(saludar('Rafa'));
console.log(saludar3('Juan'));
console.log(saludar4);

//forma 1
/*const getUser = () => {
    return {
        uid: 'jkbhfsk',
        username: 'Rafael'
    }
};*/

//forma 2
const getUser = () => ({
    uid: 'jkbhfsk',
    username: 'Rafael'
});

const user = getUser();
console.log(user);



//Tarea
//1. Transformen a una funcion de flecha
//2. Retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: '',
        userNombre: nombre
    };
}

const usuarioActivo = getUsuarioActivo('Rafael Brenes');
console.log(usuarioActivo);

//Resultado
const getUsuarioActivor = (nombre) => ({
    uid: '',
    userNombre: nombre
});

const usuarioActivor = getUsuarioActivor('Rafael Brenes');
console.log(usuarioActivor);