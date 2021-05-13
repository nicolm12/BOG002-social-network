
export var imagen =function(){
const imagePreview = document.getElementById('img-preview');
const imageUploader = document.getElementById('img-uploader');
 const imageUploadbar = document.getElementById('img-upload-bar');

imageUploader.addEventListener('change',  (e) => {
    console.log(e);
    //revisar target sino funciona
    const file = e.target.files[0];
    var storageRef = firebase.storage().ref();
    var imagenesDataREF=firebase.database().ref().child("postsvisual");
    var uploadTask = storageRef.child('Posts'+file.name).put(file);
    visualizar();
    var database = firebase.database();
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      console.log("User doesn't have permission to access the object")
      break;

    case 'storage/canceled':
      console.log("User canceled the upload")
      break;

    case 'storage/unknown':
      console.log("Unknown error occurred, inspect error.serverResponse")
      break;
  }
}, function() {
    
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL()
  .then(function(downloadURL) {
    console.log('File available at', downloadURL);
    crearNodo(file.name,downloadURL)
    visualizar(file.name,downloadURL)
  });
});
})

};
function crearNodo(nombre,urldatabase){
    imagenesDataREF.push({Nombre:nombre,Url:urldatabase});
}

function visualizar(urlfirebase){
    var padre=document.querySelector("#visual")
    var visualizacionImagen=`<img src=`+ urlfirebase+`"></img>`
    
    
   
    console.log(urlfirebase)
    //aqui se utiliza firestore xd


}

 