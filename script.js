// script.js

document.getElementById("explore-link").addEventListener("click", () => {
  window.open("explore.html", "_blank");
});

document.getElementById("bluetooth-connect").addEventListener("click", () => {
  if (navigator.bluetooth) {
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
      })
      .then((device) => {
        console.log("Connected to device:", device.name);
      })
      .catch((error) => {
        console.error("Error connecting to Bluetooth device:", error);
      });
  } else {
    alert(
      "Bluetooth is not supported on this device. Please open Bluetooth settings manually."
    );
  }
});

document.getElementById("explore-link").addEventListener("click", () => {
  window.open("explore.html", "_blank");
});

document.getElementById("search-link").addEventListener("click", () => {
  const searchContainer = document.getElementById("search-container");
  if (
    searchContainer.style.display === "none" ||
    searchContainer.style.display === ""
  ) {
    searchContainer.style.display = "flex";
  } else {
    searchContainer.style.display = "none";
  }
});

document.getElementById("messenger-link").addEventListener("click", () => {
  window.open("messenger.html", "_blank");
});

function previewProfilePic(event) {
  const input = event.target;
  const preview = document.getElementById("profile-pic-preview");

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
