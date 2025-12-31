function register() {
  localStorage.setItem("user", rUser.value);
  localStorage.setItem("pass", rPass.value);
  alert("Registered Successfully");
}

function login() {
  if (
    lUser.value === localStorage.getItem("user") &&
    lPass.value === localStorage.getItem("pass")
  ) {
    document.querySelector(".box").classList.add("hidden");
    document.getElementById("secure").classList.remove("hidden");
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  document.getElementById("secure").classList.add("hidden");
  document.querySelector(".box").classList.remove("hidden");
}
