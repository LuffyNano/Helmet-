function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        createMap(latitude, longitude);
      },
      function (error) {
        console.error("Error getting geolocation: ", error);
        // Fallback to a default location if geolocation fails
        createMap(28.6139, 77.209); // New Delhi coordinates
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    // Fallback to a default location if geolocation is not supported
    createMap(28.6139, 77.209); // New Delhi coordinates
  }
}

function createMap(latitude, longitude) {
  var mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: "You are here",
  });
}

// Export initMap for use in the HTML script
window.initMap = initMap;

let map;
let marker;
let directionsService;
let directionsRenderer;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        createMap(latitude, longitude);
      },
      function (error) {
        console.error("Error getting geolocation: ", error);
        // Fallback to a default location if geolocation fails
        createMap(28.6139, 77.209); // New Delhi coordinates
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    // Fallback to a default location if geolocation is not supported
    createMap(28.6139, 77.209); // New Delhi coordinates
  }
}

function createMap(latitude, longitude) {
  var mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: "You are here",
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

function searchLocation() {
  var input = document.getElementById("search-input").value;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: input }, function (results, status) {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      if (marker) {
        marker.setPosition(results[0].geometry.location);
      } else {
        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      }
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function calculateRoute() {
  var start = document.getElementById("start-input").value;
  var end = document.getElementById("end-input").value;

  if (start && end) {
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: "DRIVING",
      },
      function (response, status) {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          alert("Directions request failed due to " + status);
        }
      }
    );
  } else {
    alert("Please enter both start and end locations.");
  }
}

// Export functions for use in the HTML script
window.initMap = initMap;
window.searchLocation = searchLocation;
window.calculateRoute = calculateRoute;
