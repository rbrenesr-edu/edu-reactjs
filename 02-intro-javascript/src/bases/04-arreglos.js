//Arreglos en js

//Forma no tan comun de hacer la declaración del arreglo
/*const arreglo = new Array();
console.log(arreglo);*/


/*const arr = [];*/
/*
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);*/

//console.log(arr);


const arreglo = [1, 2, 2, 3];
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);