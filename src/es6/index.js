//< 1>

//Antes de ES6

function newFunction(name, age, country) {
    var name = name || "Claudio";
    var age = age || 31;
    var country = country || "ARG";
    console.log(name, country, age);

}

// ES6 Parametros por defecto

function newFunction2(name = 'Oscar', age = 31, country = "ARG") {
    console.log(name, age, country);
}

newFunction2(); // Toma los elementos por defecto .
newFunction2('Ricardo', '23', 'CO'); // Toma los elementos que yo le asigno.


//Antes de ES6

let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


//ES6 Template literals
//Nos permiten hacer uniones de manera mas amigable sin usar el signo + y las " " 

let epicPhrase2 = `${hello} ${world}`; //Se usa: `${variable} ${variable}` para concatenar
console.log(epicPhrase2);


//</ 1>