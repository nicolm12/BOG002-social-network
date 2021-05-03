export function ingreso() {
  const botonAcceder = document.getElementById('botonAcceder');
  botonAcceder.addEventListener('click', () => {
    let email = document.getElementById('usser').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });
}
function observador() {
  firebase.auth().onAuthStateChanged((user2) => {
    if (user2) {
      console.log("existe usuario");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      let uid = user2.uid;
      // ...
    } else {
      console.log("no existe usuario");
      // User is signed out
      // ...
    }
  });
}
observador();
