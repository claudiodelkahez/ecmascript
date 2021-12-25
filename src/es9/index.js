//ES9

const { resolve } = require("path/posix");
const { setTimeout } = require("timers/promises");

//Operador de reposo
//Puede extraer las caracteristicas de un objeto que aun no se a construido.

const obj = {
    name: ' Oscar',
    age: 32,
    country: 'MX'
};

let { country, ...all } = obj;
//Aqui desestructuramos el objeto, sacamos el key que nos interesaba que en este caso es country, y para no escribir el resto usamos ...all
console.log(country, all);

// (...) es conocido como el operador de propagacion, con este, podemos traer todos los keys con sus respectivos values de objeto, como veremos a continuacion.

const obj = {
    name: 'Oscar',
    age: 32
};

const obj1 = {
    ...obj,
    country: 'Mx'
};

console.log(obj1);


//

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve(' Hello world'), 3000)
            : reject(new Error(' Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log(' Finalizo'));




const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);