
// Create a root reference





// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false

// export function imagen(){
//     var storageRef = firebase.storage();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');
// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath }
    
// //     var storage = firebase.storage();
// // var storageRef = storage.ref();
    
// //     const imagePreview = document.getElementById('img-preview');
// // const imageUploader = document.getElementById('img-uploader');
// // const imageUploadbar = document.getElementById('img-upload-bar');

imageUploader.addEventListener('change',  (e) => {
    console.log(e);
 //const file = e.target.files[0];
 var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var imagenRef = storageRef.child('image.jpg');
var file=document.getElementById("imagenprueba");
var uploadTask = storageRef.child('image.jpg').put(file);})

// //     var uploadTask = storageRef.child('images/mountains.jpg').put(file, metadata);
// // })} 