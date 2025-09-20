<script>
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(this);

  fetch("signup.php", {
    method: "POST",
    body: form
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    if (data.includes("Signup successful")) {
      window.location.href = "login.html";
    }
  });
});
  </script>
</body>
</html>
