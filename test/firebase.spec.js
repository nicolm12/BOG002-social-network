import { registroFirebaseEmail,googleFirebase} from '../src/firebase/firebase.js';

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

  it('Deberia de loguearme', (done) => {
    const promesa = registroFirebaseEmail('ben@example.com', 'examplePass'); 
     return promesa
    
    .then((retorno) => {  
      expect(retorno).toBe(true);
      done();
    })
  })
  })

  describe('googleRegister', () => {

    it('Deberia de loguearme con google', (done) => {
      const objetoGoogle = googleFirebase('ben@gmail.com', 'examplePass'); 
      
       expect(typeof objetoGoogle).toBe("object");
       return objetoGoogle.then((retorno) => {  
         console.log(retorno)
        expect(typeof retorno).toBe("object");
        done();
      })
     
    })
    })

