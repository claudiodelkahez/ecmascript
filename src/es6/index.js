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

//< /2>





//< 3>
//Parámetros en objetos.

let nombre = 'Claudio';
let edad = 31;

//Parámetros en objetos en ES5 
obj = { nombre: nombre, edad: edad };
//Parámetros en ES6 
//Nos permite ahorra codigo cuando el objeto es mas grande.
obj2 = { nombre, edad };
console.log(obj2);

//Arrow functions
// Sintaxis mas reducida y un dis no vinculable

const names = [
    { name: 'Claudio', age: 31 },
    { name: 'Yesica', age: 25 }
]

//ES5 
let listOfNames = names.map(function (item) {
    console.log(item.name);

});

//ES6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //aqui iria el bloque de codigo que estoy estableciendo para list of names3
}

const listOfNames4 = name => {
    //bloque de codigo
}

const square = num => nume * num;

//Promesas (para trabajar el asinmcronismo)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


// En el curso de asincronismo se ahonda en las promesas y como hacer llamados a una API.


//</ 3>


//< 4>

//Las clases son una forma en la que manejamos una sintaxis mas clara para manejar objetos y tambien la herencia dentro de javascript y esto nos permite aplicar la POO dentro de javascript

class calculator {
    //introducimos la palabra class con lo cual indicamos que estamos definiendo una clase
    consturctor() {
        //las clases necesitan un cosnstructor, en este asignaremos las variables DENTRO DEL SCOPE GLOBAL
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        //sum es un metodo, al cual pasaremos los valores A y B
        this.valueA = valueA;
        //con esto estoy asignando las variables que construi previamente a los valores que recibe.
        this.valueB = valueB;
        return this.valueA + this.valueB;
        //aqui se hace la suma de dichos valores
    }
}

const calc = new calculator();
// Tener en cuenta que para llamar a una clase con una variable, es necesario el "new", explicitamente necesario e indispensable. Si se coloca solo el nombre de la clase esto no va a funcionar.
console.log(calc.sum(5, 5));