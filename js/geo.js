/**
*
* Geo.js
* This file handles the geolocalization functionalities
*
**/

var watchId;

function onGPSSuccess(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var accuracy = pos.coords.accuracy;
	  
      
      localStorage.latitude=latitude;
      localStorage.longitude=longitude;
      localStorage.accuracy=accuracy;
      updateUserPosition(latitude,longitude);
}


function onGPSError(error) {
//TODO FIx this
  alert (error.code)
}

function watchGPS() {
      watchId = navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, {
	      //frequency: 4000, Does not work, using maximumAge instead
          enableHighAccuracy: true,
          maximumAge: 3000,
          timeout: 2500
        });
}

function stopWatching() {
  // Function needed to cancel the updates.
  navigator.geolocation.clearWatch(watchId);
}


   