//ES9

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
