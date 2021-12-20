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

//< 2>

//Multilinea antes de ES6

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n"
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
console.log(lorem);

//Multilinea antes de ES6

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
console.log(lorem2);


//Destructuracion de los elemento:

//Dado un objeto objeto.

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

//Antes de ES6
console.log(person.name, person.age);

//Destructuracion con ES6
let { name, age, country } = person;

console.log(name, age);

//Operador de propagacion. Nos permite expandir de ciertas situaciones varios elementos.
//El operador de propagacion nos permite unir ciertos elementos de arreglos (arrays)
//Es una solucion que permite ayudar a la legibilidad y simplicidad del codigo que nos permite tener arrays mas legibles

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2];
console.log(education);


//De esta forma puedo unir diferentes elementos, separandolos por equipos y uniendolos en el elemento que yo necesitos.



//LET solo esta disponible en el scope del bloque en el cual va a ser llamado.

{
    var globalVar = "Global var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
    //Declarado dentro del bloque de codigo (scope) es que puede inicializarse la variable


}

console.log(globalVar);
//console.log(globalLet); No puede acceder porque esta por fuera del bloque de codigo donde esta declarada la variable

//CONST
//Const nos va a permitir establecer una variable que no puede cambiar su valor.

const a = 'bd';
//a = 'a'; No me lo va a permitir porque el valor constate no puede ser reasignado

