
export var imagen =function(){
const imagePreview = document.getElementById('img-preview');
 const imageUploader = document.getElementById('img-uploader');
 const imageUploadbar = document.getElementById('img-upload-bar');

imageUploader.addEventListener('change',  (e) => {
    console.log("si esta captando el callback")
    console.log(e);
    
})
};
//  const file = e.target.files[0];
//  //var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var imagenRef = storageRef.child('image.jpg');
// var file=document.getElementById("imagenprueba");
// var uploadTask = storageRef.child('image.jpg').put(file);})

// //     var uploadTask = storageRef.child('images/mountains.jpg').put(file, metadata);
// // })} 