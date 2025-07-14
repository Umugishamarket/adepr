// initialize Firebase (ibyo biri muri firebaseConfig.js)
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const names = document.getElementById("names").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const district = document.getElementById("district").value;
  const church = document.getElementById("church").value;
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  // Kwiyandikisha mu auth
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Kwiyandikisha muri Firestore
      return db.collection("abakristo").doc(user.uid).set({
        uid: user.uid,
        names,
        email,
        phone,
        district,
        church,
        role,
        createdAt: new Date().toISOString()
      });
    })
    .then(() => {
      alert("Wiyandikishije neza!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Ikibazo: " + error.message);
    });
});
