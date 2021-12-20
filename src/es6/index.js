function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 21;
    var country = country || "Colombia";

    console.log(name, country, age);

}

// es6

function newFunction2(name = 'oscar', age = 32, country = "Arg"){
    console.log(name,age,country);
}

newFunction2();

newFunction2('Ricardo', '23', 'CO');


//template literals

let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);


//es6 
//se usan comillas francesas, signo dolar y corchetes para concatenar variables ej: `${hola} ${mundo}`
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);

