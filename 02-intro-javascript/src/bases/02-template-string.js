const nombre = 'Rafael';
const apellido = 'Brenes';

//forma anterior
//const nombreCompleto = nombre + ' ' + apellido;

//nueva forma
let nombreCompleto = `Este es mi nombre: ${nombre} ${apellido}`;
console.log(nombreCompleto);


nombreCompleto = ` Este es mi nombre: ${nombre}  ${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Este es un saludo ${getSaludo(nombreCompleto)}`);

