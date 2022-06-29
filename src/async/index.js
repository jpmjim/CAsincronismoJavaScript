// Asíncronas
//-------------

// Logica de la Promesa
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async OK'), 2000)
      : reject(new Error('Async Failed'));
  })
}

//El Async
const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');