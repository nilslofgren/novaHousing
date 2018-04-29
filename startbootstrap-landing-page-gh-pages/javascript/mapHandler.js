
function initMap() {

  var dropSelection = document.getElementById("campuses").value;
  console.log("value is: " + dropSelection);

  if (dropSelection == "Villanova University"){
    var novaLatLng = {lat: 40.037056, lng: -75.3457687};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: novaLatLng,
      zoom: 13
    });
    var marker = new google.maps.Marker({
      position: novaLatLng,
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker) {
         return function() {
             infowindow.setContent("Villanova University");
             infowindow.open(map, marker);
         }
    })(marker));
  }
  else if(dropSelection == "Drexel University"){
    var drexLatLng = {lat: 39.9566127, lng: -75.1899441};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: drexLatLng,
      zoom: 13
    });
    var marker = new google.maps.Marker({
      position: drexLatLng,
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker) {
         return function() {
             infowindow.setContent("Drexel University");
             infowindow.open(map, marker);
         }
    })(marker));
  }

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map
  });


  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);

    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent =
        place.formatted_address;
    infowindow.open(map, marker);
  });
}

/*
function getLatLong(address) {
var geocoder = new google.maps.Geocoder();
var result = "";
geocoder.geocode( { 'address': address, 'region': 'uk' }, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
         result[lat] = results[0].geometry.location.Pa;
         result[lng] = results[0].geometry.location.Qa;
     } else {
         result = "Unable to find address: " + status;
     }
     storeResult(result);
    });
}
*/