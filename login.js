// login.js

import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  // Get form
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful:", userCredential.user);
        alert("Login successful!");

        // Redirect
        const role = document.getElementById("roleSelect").value;

        if (role === "admin") {
          window.location.href = "admin-dashboard.html";
        } else {
          window.location.href = "user-dashboard.html";
        }
      })
      .catch((error) => {
        console.error(error);

        if (error.code === "auth/user-not-found") {
          alert("No account found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          alert("Incorrect password.");
        } else {
          alert(error.message);
        }
      });
  });

});