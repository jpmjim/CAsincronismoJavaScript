//PROMISES
//----------

// Ejercicio 1
const promise = new Promise(function(resolve, reject) {
  resolve('hey}!');
})

// Ejercicio 2
// Juagamos el valor de cows para ver los diferentes resultados 15 y 9
const cows = 15;
const countCows = new Promise(function(resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is not cows on the farm");
  }
});

countCows.then((result) => {
  console.log(result);
}).catch ((error) => {
  console.log(error);
}).finally (() => {
  console.log('Finally');
})