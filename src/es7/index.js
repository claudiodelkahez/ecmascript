//< 6>
//ES7 Junio de 2016 Icorpora includes y operaciones en forma exponencial
//

// Includes

// Trabaja sobre un arreglo(array) o un string nos va a permitir saber si hay un elemento dentro de este valor.
let numbers = [1, 2, 3, 7, 8];
//validacion para saber si el numero esta dentro del arreglo
if (numbers.includes(7)) {
    console.log('si se encuentra el valor 7');
} else {
    console.log('No se encuentra.')
}

// Anteriormente en versiones anteriores usabamos index of y un codigo mas complejo para asignarlo.


//Como elevar a la potencia


let base = 4;
let exponente = 3;
// para asignar una potencia se utiliza ** (doble asterisco)
let resultado = base ** exponente;

console.log(resultado);