document.getElementById("bluetooth-connect").addEventListener("click", () => {
  if (navigator.bluetooth) {
    navigator.bluetooth
      .requestDevice({
        filters: [{ services: ["audio"] }], // Adjust this based on the device you want to connect to
        optionalServices: ["battery_service"],
      })
      .then((device) => {
        console.log("Connected to device:", device.name);
        return device.gatt.connect(); // Connect to the device
      })
      .then((server) => {
        console.log("Connected to GATT server");
        // Add code here to interact with GATT services and characteristics
      })
      .catch((error) => {
        console.error("Error connecting to Bluetooth device:", error);
      });
  } else {
    alert("Bluetooth is not supported on this device.");
  }
});
