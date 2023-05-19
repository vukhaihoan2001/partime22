document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  handeLogin();
});
function handeLogin(event) {
  const username = document.querySelector("#username").value;

  const password = document.querySelector("#password").value;

  const login = {
    username: username,
    password: password,
  };

  const getLogin = JSON.parse(localStorage.getItem("users"));
  let isLogin = false;

  getLogin.forEach((user) => {
    if (user.password === password && user.username === username) {
      isLogin = true;
      window.location.replace("home.html");
    }
  });

  localStorage.setItem("userLogin", JSON.stringify(login));
}
let loginButton = document.querySelector("login-home");
