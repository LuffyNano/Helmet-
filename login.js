document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // You would typically send these credentials to your server for verification

  // For now, redirect to the home page
  window.location.href = "index.html";
});

document.getElementById("skip-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});
