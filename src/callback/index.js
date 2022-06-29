//CALLBACKS
// ------------
// Ejercicio 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc (num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum));

// Ejercicio 2
setTimeout(function() {
  console.log('Hola JavaScript');
}, 2000);

// Ejercicio 3
function greetting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greetting, 2000, 'Jimmy');

// Ejercicio 4 ejecutar en un navegador o https://playcode.io/javascript/
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  const nombre = prompt('Por favor ingresa tu nombre: ');
  callback(nombre);
}

procesarEntradaUsuario(saludar);