// Get the audio player element
const audioPlayer = document.getElementById("audio-player");

// Play Button
document.getElementById("play-button").addEventListener("click", () => {
  audioPlayer.play();
});

// Pause Button
document.getElementById("pause-button").addEventListener("click", () => {
  audioPlayer.pause();
});

// Stop Button
document.getElementById("stop-button").addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});

// Bluetooth Connect Button
document.getElementById("bluetooth-connect").addEventListener("click", () => {
  if (navigator.bluetooth) {
    navigator.bluetooth
      .requestDevice({
        filters: [{ services: ["audio"] }],
        optionalServices: ["battery_service"],
      })
      .then((device) => {
        console.log("Connected to device:", device.name);
        return device.gatt.connect();
      })
      .then((server) => {
        console.log("Connected to GATT server");
        // You might need to interact with Bluetooth GATT server to control playback
      })
      .catch((error) => {
        console.error("Error connecting to Bluetooth device:", error);
      });
  } else {
    alert("Bluetooth is not supported on this device.");
  }
});
