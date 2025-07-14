// login.js
const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Winjiye neza!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Ikibazo: " + error.message);
    });
});
