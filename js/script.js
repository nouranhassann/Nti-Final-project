
  document.getElementById("submitBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !name || !message) {
      alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      alert("Thank you! We'll get back to you soon.");
    }
  });

