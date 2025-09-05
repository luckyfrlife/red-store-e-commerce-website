
  // Toggle Forms
  const registerBtn = document.querySelector(".register-btn");
  const loginBtn = document.querySelector(".login-btn");
  const container = document.querySelector(".containers");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // Form Validation + Redirect
  function validateLoginForm() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return false;
    }

    // Simulate successful login and redirect
    window.location.href = "index.html";
    return false; // prevent default form submission
  }

  function validateRegisterForm() {
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    if (username === "" || email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }

    // Simulate successful registration and redirect
    window.location.href = "index.html";
    return false; // prevent default form submission
  }
