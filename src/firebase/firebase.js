export function registroFirebaseEmail(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

            location.href = "#/principal";
            return true
         
    })
        .catch((error) => {
            var errorCode = error.code;
            console.log("pruebita ",errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
               
        })
        
};

export function googleFirebase() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user.displayName);
        console.log(user);
        updateUser(user);
        // if(user.uid){
        //     location.href = "#/principal"
        //     return}
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(errorMessage);
    });
};
export function inicioFirebase(mail, contraseña) {
    firebase.auth().signInWithEmailAndPassword(mail, contraseña)
        .then((inicio) => {
            // Signed in
            var user = inicio.user;
            
            console.log(user.uid)
            if(user.uid){
                location.href = "#/principal"
                //return
                
               
            }
            console.log(inicioFirebase(mail,contraseña))
        })
            

        
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

}
// export function observador() {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             console.log("existe usuario y es: " + user);
            
//         } else {
//             console.log("no existe usuario");
//             // User is signed out
//             // ...
//         }
//     });
// };

//firestore
// export let firestore=function(){
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   })};