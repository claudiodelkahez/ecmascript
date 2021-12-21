//ES8 

// Object.entries
//objeto

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
//object.entries nos devuelve la clave y los valores de una matriz de arreglos. Entra un objeto sale una matriz de arrays
const entries = Object.entries(data);
console.log(entries);
//Regresa una matriz

//si queremos saber cuantos elementos tiene un objeto, usando .lengt podemos saberlo.
console.log(entries.length);

//Object.values
// object.values me devuelve los valores de un objeto a un arreglo(array)

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
//ordena el objeto como un arreglo de strings los valores ignorando la asignacion que teniamos frontend, backend, design etc.
// Object siempre va en con 
const values = Object.values(data);
console.log(values);
//ademas con values, podemos agregar al console.log la propiedad .length y saber cuantos elementos tenemos
console.log(values.length);


//PADDING .padStart
//Nos permite anteponer una cadena vacia o elementos al string

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));

// para que nos puede llegar a servir esto? 
// presentar una lista de elemntos un menu

console.log('food'.padEnd(12, ' -----'))


//llmado de trailing commas
//estable que seguido puede haber un valor como no.
const obj = {
    name: 'Oscar',
}