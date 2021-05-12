
export var imagen =function(){
const imagePreview = document.getElementById('img-preview');
const imageUploader = document.getElementById('img-uploader');
 const imageUploadbar = document.getElementById('img-upload-bar');

imageUploader.addEventListener('change',  (e) => {
    
    console.log("si esta captando el callback")
    console.log(e);
    //revisar target sino funciona
    const file = e.target.files[0];
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('Posts'+file.name).put(file);
    visualizar();
})
};
function visualizar(){
    //aqui se utiliza firestore xd


}

 