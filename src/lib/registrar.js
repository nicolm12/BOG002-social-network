export function registro() {
  const botonregistro = document.querySelector('.registerbtn');

  botonregistro.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      // ..
      });
  });
}

/**/
