
   imageUploader.addEventListener('change',  (e) => {
    console.log(e);
 const file = e.target.files[0];
 var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var imagenRef = storageRef.child('image.jpg');
var file=document.getElementById("imagenprueba");
var uploadTask = storageRef.child('image.jpg').put(file);})