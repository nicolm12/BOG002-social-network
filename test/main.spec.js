 //importamos la funcion que vamos a testear
 import {init}   from '../src/main.js';

 
 describe('Init', () => {
   console.log(init)
   console.log(typeof init)
   
   it.skip('debería ser una función de inicializar', () => {
    console.log("yo que se")
 });
 });
