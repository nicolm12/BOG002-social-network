 //importamos la funcion que vamos a testear
 import {init}   from '../src/main.js';

 
 describe('Init', () => { 
   it('debería ser una función de inicializar', () => {
    expect(typeof init).toBe("function");
 });
 });

 it('mock hash', () => {
  const { location } = window;
  delete window.location;
  window.location = { reload: jest.fn() };

  expect(window.location.reload).not.toHaveBeenCalled();
  window.location.reload();
  expect(window.location.reload).toHaveBeenCalled();
  window.location = location;
});
