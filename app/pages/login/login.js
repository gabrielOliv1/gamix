document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username_input");
    const password = document.getElementById("password_input");
    const loginButton = document.getElementById("login_button");
    
    username.addEventListener("input", checkInputs);
    password.addEventListener("input", checkInputs);
    
    function checkInputs() {
      if(username.value.length >= 1 && password.value.length >= 1) {
        loginButton.style.background = "rgba(104, 88, 157, 1)";
        loginButton.style.cursor = "pointer";
      } else {
        loginButton.style.background = "rgba(104, 88, 157, 0.6)";
        loginButton.style.cursor = "not-allowed";
      }
    }
});

function toggleCheck(e) {
    e.classList.toggle("checked");
}

function login() {
    const username = document.getElementById("username_input");
    const password = document.getElementById("password_input");

    if(username.value.length < 1 || password.value.length < 1) return;
    if(username.value === "pipokinha" && password.value === "pipokinha") {
        window.location.href = "/feed";
    } else {
        alert("Username ou senha inválido.");
    }
}