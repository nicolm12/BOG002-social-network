 //importamos la funcion que vamos a testear
 import  init  from '../src/main.js';

 
 describe('Init', () => {
   console.log(init)
   it.skip('debería ser una función de inicializar', () => {
  expect(typeof init).toBe('object');
 });
 });
