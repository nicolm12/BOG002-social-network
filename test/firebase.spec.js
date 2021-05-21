import { registroFirebaseEmail,googleFirebase,inicioFirebase,observador} from '../src/firebase/firebase.js';

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
() => {
       return null;
      },
  () => {
    return mockauth;
    
  },

);
mockauth.autoFlush();
global.firebase = mocksdk;


describe('Register', () => {

  it.skip('Deberia de loguearme', (done) => {
    const promesa = registroFirebaseEmail('ben-esto NO DEFEBERIA FUNCIONAR', 'examplePass'); 
     return promesa
    
    .then((retorno) => {  
      expect(retorno).toBe(true);
      done();
    })
    
     
    
  })
  })

  describe('googleRegister', () => {

    it.skip('Deberia de loguearme con google', (done) => {
      const objetoGoogle = googleFirebase('ben@gmail.com', 'examplePass');       
      return objetoGoogle.then((retorno) => {  
       expect(retorno).toBe(true);
       expect(typeof objetoGoogle).toBe("object") 
       done()       
      })
     
    })
    })

    describe('Inicio', () => {

      it.skip('Iniciofirebase', (done) => {
        const inicio = inicioFirebase('ben@gmail.com', 'examplePass');    
        return inicio 
        
        .then((retorno) => {  
         
         expect(retorno).toBe(true);
         done()       
        })
       
      })
      })


      describe('Cambio de sesion', () => {

        it('stateChange', () => {
          const inicio = observador("cualquiercosa");    
          expect(typeof inicio).toBe("function");
                
        })
        })
  