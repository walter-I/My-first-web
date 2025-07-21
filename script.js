document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("message").innerText = "Login successful (demo only)";
});