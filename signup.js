<script>
const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
    .then(res => res.text())
    .then(data => {
      if (data.trim() === "success") {
        message.textContent = "✅ Login successful!";
        message.style.color = "green";
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 1000);
      } else {
        message.textContent = "❌ Invalid email or password!";
        message.style.color = "red";
      }
    });
});

  </script>
