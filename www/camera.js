var pictureSource;   // picture source
var destinationType; // sets the format of returned value 


// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

  function onSuccess(imageURI) {

      var image = document.getElementById('myImage');
      image.style.display='block';
      image.src = imageURI;

      var lastCameraID = localStorage.getItem('lastCameraID');
      var uniqueCameraID = lastCameraID;


      var camSaveID = "cam"+uniqueCameraID.toString();

      localStorage.setItem(camSaveID, imageURI);
      
      loadHistory(uniqueCameraID);
      uniqueCameraID++;

      localStorage.removeItem( 'lastCameraID' );
      localStorage.setItem( 'lastCameraID', uniqueCameraID );




	}
// A button will call this function
//
function capturePhoto() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI, saveToPhotoAlbum: true  });
}


// Called if something bad happens.
// 
function onFail(message) {
  alert('Failed because: ' + message);
}



