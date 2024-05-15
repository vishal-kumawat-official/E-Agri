

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAqKEyKQTU5oi7OOl4xFHy4knMle5Twzk8",
//   authDomain: "forms-validation-1d122.firebaseapp.com",
//   projectId: "forms-validation-1d122",
//   storageBucket: "forms-validation-1d122.appspot.com",
//   messagingSenderId: "262726292248",
//   appId: "1:262726292248:web:25f57ddf93bdebbd51046d",
//   measurementId: "G-JGESSK4G8Q"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAqKEyKQTU5oi7OOl4xFHy4knMle5Twzk8",
  authDomain: "forms-validation-1d122.firebaseapp.com",
  databaseURL: "https://forms-validation-1d122-default-rtdb.firebaseio.com",
  projectId: "forms-validation-1d122",
  storageBucket: "forms-validation-1d122.appspot.com",
  messagingSenderId: "262726292248",
  appId: "1:262726292248:web:25f57ddf93bdebbd51046d",
  measurementId: "G-JGESSK4G8Q"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
// Corrected version with correct spelling
document.addEventListener("DOMContentLoaded", function() {
 

  
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message; // Set the message
    toast.style.display = "block"; // Show the toast
  
    // Hide the toast after the animation ends
    setTimeout(() => {
        toast.style.display = "none";
    }, 4000); // The duration matches the CSS animation
  }
  const submit = document.getElementById("submit");
  submit.addEventListener("click", function(event) {
    event.preventDefault(); // Correct syntax
    
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value; // Corrected typo
    const number = document.getElementById("no").value;
    const password = document.getElementById("pass").value;



createUserWithEmailAndPassword(auth, email, password, name,  number)
.then((userCredential) => {
  const user = userCredential.user;

  // Show a custom message with the toast
  showToast("Account created successfully!");
  const redirectUrl = `../Log-in/login.html?username=${name}`;
  // Navigate to the login page after a short delay
  setTimeout(() => {
      window.open(redirectUrl, "_self");
  }, 300); // Delay allows the toast to display first
})
.catch((error) => {
  const errorMessage = error.message;
  showToast("Error: " + errorMessage); // Show error message in a cool way
});
});
});

