let points = 0;
let tracking = false;
let lastPosition = null;
let watchId = null;

document.getElementById("start-tracking").addEventListener("click", () => {
  if (navigator.geolocation) {
    tracking = !tracking;
    if (tracking) {
      document.getElementById("status-text").innerText = "Status: Tracking";
      startTracking();
    } else {
      document.getElementById("status-text").innerText = "Status: Not started";
      stopTracking();
    }
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

function startTracking() {
  watchId = navigator.geolocation.watchPosition(
    (position) => {
      if (lastPosition) {
        const distance = calculateDistance(
          position.coords,
          lastPosition.coords
        );
        const time = (position.timestamp - lastPosition.timestamp) / 1000; // Time in seconds
        const speed = (distance / time) * 3.6; // Speed in km/h

        document.getElementById("speed").innerText = speed.toFixed(2);

        // Simulate checking if the helmet is worn
        let helmetWorn = checkHelmet();
        if (helmetWorn && speed > 0) {
          points++;
          document.getElementById("points").innerText = points;
        }
      }
      lastPosition = position;
    },
    (error) => {
      console.error("Error getting position:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

function stopTracking() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
  }
  lastPosition = null;
}

function checkHelmet() {
  // Simulate helmet check
  // In a real application, this would involve checking a sensor or other input
  return true; // Assuming helmet is always worn for this example
}

function calculateDistance(coords1, coords2) {
  const R = 6371e3; // Radius of the Earth in meters
  const lat1 = (coords1.latitude * Math.PI) / 180;
  const lat2 = (coords2.latitude * Math.PI) / 180;
  const deltaLat = ((coords2.latitude - coords1.latitude) * Math.PI) / 180;
  const deltaLon = ((coords2.longitude - coords1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
}
