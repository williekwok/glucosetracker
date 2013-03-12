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

      console.log(imageURI);

      lastCameraID = localStorage.getItem('lastCameraID');
      uniqueCameraID = parseInt(lastCameraID);


      camSaveID = "cam"+uniqueCameraID;
      console.log(camSaveID);
      console.log(typeof camSaveID);


      localStorage.setItem(camSaveID, imageURI);
      console.log(localStorage.getItem(camSaveID));

      uniqueCameraID++;

      localStorage.removeItem( 'lastCameraID' );
      localStorage.setItem( 'lastCameraID', uniqueCameraID );
      console.log(localStorage.getItem('lastCameraID'));


	}
// A button will call this function
//
function capturePhoto() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 100,
    destinationType : navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.CAMERA,
    encodingType: navigator.camera.EncodingType.JPEG,
    saveToPhotoAlbum: true
  });
}


// Called if something bad happens.
// 
function onFail(message) {
  alert('Failed because: ' + message);
}



