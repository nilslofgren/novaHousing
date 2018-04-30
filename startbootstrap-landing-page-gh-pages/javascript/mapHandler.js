
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

  var locations = [
       ['120 Elm Ave', 40.004676,-75.2945, '4 Bedrooms', '1 Full Bath'],
       ['52 N. Roberts Road', 40.0260413,-75.3226557,'4 Bedrooms', '1 Full Bath'],
       ['108 N. Aberdeen Ave.', 40.0444434, -75.3815002,'4 Bedrooms', '1 Full Bath'],
       ['218 Bailey Road', 40.025557, -75.338917,'4 Bedrooms', '1 Full Bath'],
       ['221 Brook Street', 40.016906, -75.32273,'4 Bedrooms', '1 Full Bath'],
       ['709 Brook Street', 40.0159229, -75.3223824,'4 Bedrooms', '1 Full Bath'],
       ['710 Brook Street', 40.0158203, -75.3226251,'4 Bedrooms', '1 Full Bath'],
       ['711 Brook Street', 40.016032, -75.322338,'4 Bedrooms', '1 Full Bath'],
       ['241 Callanan Ave', 40.0236557, -75.3367882,'4 Bedrooms', '1 Full Bath'],
       ['245 Callanan Ave', 40.02353, -75.336782,'4 Bedrooms', '1 Full Bath'],
       ['249 Callanan Ave', 40.0234468, -75.3369602,'4 Bedrooms', '1 Full Bath'],
       ['625 Conestoga Road', 40.0302987, -75.3650727,'4 Bedrooms', '1 Full Bath']

  ];
  var infowindow = new google.maps.InfoWindow;

  var marker, i;

  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
           map: map,
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
           return function() {
               infowindow.setContent('<div id="header">' + '<h1 id=firstHeading>' + locations[i][0] + '</h1>'  +
                                     '<div id="spec1">' + locations[i][3] + '<div id="spec1">' + locations[i][4] +
                                     '<hr><div id="houseDetails">' + '<a href="#">View Full Property Details</a>');
               infowindow.open(map, marker);
           }
      })(marker, i));
  }

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


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

    // infowindowContent.children['place-name'].textContent = place.name;
    // infowindowContent.children['place-address'].textContent =
    //     place.formatted_address;
    // infowindow.open(map, marker);
  });
}
/*
function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        console.log("value of address is: " + document.getElementById('address').content);
        geocoder.geocode({'address': address}, function(results, status) {
          console.log("status: " + status);
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
            console.log("Marker placed");
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
*/
