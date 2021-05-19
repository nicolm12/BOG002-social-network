
export var imagen =function(){
const imageUploader = document.getElementById('img-uploader');
const imageUploadbar = document.getElementById('img-upload-bar');

imageUploader.addEventListener('change',  (e) => {
   
    const file = e.target.files[0];
    var storageRef = firebase.storage().ref();
    
    var uploadTask = storageRef.child('Posts '+ file.name).put(file);
    
    
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 

  function(snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    imageUploadbar.value = progress;
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
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
    
  // Descargar URL
  uploadTask.snapshot.ref.getDownloadURL()
  .then(function(downloadURL) {
    console.log('Disponible como: ', downloadURL);
    visualizar(downloadURL)
  });
});
})

};
 

function visualizar(urlfirebase){
    var previsualizacion=document.querySelector("#visual")
    var visualizacionImagen='<img src="'+ urlfirebase +'"></img>'   
    previsualizacion.innerHTML=visualizacionImagen 
    console.log(urlfirebase)
   
}

 