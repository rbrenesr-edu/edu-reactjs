const persona = {
    nombre: 'Rafael',
    apellido: 'Brenes',
    edad: 35,
    direccion: {
        ciudad: 'SJ',
        zip: '42515',
        lat: '2454564564',
        lng: '5646546'
    }
}



console.table(persona);

const p2 = persona;
p2.nombre = 'Juan';


console.log(p2);
console.log(persona);