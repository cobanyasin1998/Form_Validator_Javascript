const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const password = document.getElementById("password");

const repassword = document.getElementById("repassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    error(username, "Username Gerekli");
  } else {
    success(username);
  }
  if (email.value === "") {
    error(email, "Email Gerekli");
  } else if (!validateEmail(email)) {
    error(email, "Düzgün Bir Email Giriniz");
  } else {
    success(email);
  }
  if (password.value === "") {
    error(password, "Password Gerekli");
  } else {
    success(password);
  }
  if (repassword.value === "") {
    error(repassword, "RePassword Gerekli");
  } else {
    success(repassword);
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}
