// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAqKEyKQTU5oi7OOl4xFHy4knMle5Twzk8",
//   authDomain: "forms-validation-1d122.firebaseapp.com",
//   projectId: "forms-validation-1d122",
//   storageBucket: "forms-validation-1d122.appspot.com",
//   messagingSenderId: "262726292248",
//   appId: "1:262726292248:web:25f57ddf93bdebbd51046d",
//   measurementId: "G-JGESSK4G8Q"
// };



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// function showToast(message) {
//     const toast = document.getElementById("toast");
//     toast.textContent = message; // Set the message
//     toast.style.display = "block"; // Show the toast
  
//     // Hide the toast after the animation ends
//     setTimeout(() => {
//         toast.style.display = "none";
//     }, 4000); // The duration matches the CSS animation
//   }
// const auth = getAuth(app);
// // Corrected version with correct spelling

// function getQueryParameter(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// const userName = "";
// document.addEventListener("DOMContentLoaded", function () {
//      userName = getQueryParameter("username");
// });
// document.addEventListener("DOMContentLoaded", function() {


//   const submit = document.getElementById("submit");

//   submit.addEventListener("click", function(event) {
//     event.preventDefault(); // Correct syntax
    
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
  
//     signInWithEmailAndPassword(auth,email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     showToast("Authenticated...");
//     const redirectUrl = `../../sidebar.html?username=${userName}`;
//   // Navigate to the login page after a short delay
//   setTimeout(() => {
//       window.open(redirectUrl, "_self");
//   }, 300); // Delay allows the toast to display first
// })
// .catch((error) => {
//   const errorMessage = error.message;
//   showToast("Error: " + errorMessage); // Show error message in a cool way
// });
// });
// });

// // import { getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// // document.addEventListener("DOMContentLoaded", function() {
// //   const submit = document.getElementById("submit");

// //   submit.addEventListener("click", function(event) {
// //     event.preventDefault();
    
// //     const email = document.getElementById("email").value;
// //     const password = document.getElementById("password").value;

// //     signInWithEmailAndPassword(auth, email, password)
// //       .then(async (userCredential) => {
// //         const user = userCredential.user;
        
// //         // Fetch user data from Firestore
// //         const userDoc = await getDoc(doc(firestore, "users", user.uid));
// //         const userData = userDoc.exists() ? userDoc.data() : {}; // Extract data if exists

// //         const userName = userData.name || "User"; // Get the user's name, fallback if not found

// //         showToast(`Welcome, ${userName}!`);

// //         const redirectUrl = `../../sidebar.html?username=${userName}`; // Pass the name to the next page
// //         setTimeout(() => {
// //             window.open(redirectUrl, "_self");
// //         }, 300);
// //       })
// //       .catch((error) => {
// //         const errorMessage = error.message;
// //         showToast("Error: " + errorMessage);
// //       });
// //   });
// // });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const firestore = getFirestore(app);



function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
  
    setTimeout(() => {
        toast.style.display = "none";
    }, 4000); // The duration matches the CSS animation
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", function(event) {
    event.preventDefault(); // Correct syntax
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Fetch user profile data from Firestore
        // const userDoc = await getDoc(doc(firestore, "users", user.uid));
        // const userName = userDoc.exists() ? userDoc.data().name : "Unknown";
        const userName = user.email.split("@")[0];

        showToast(`Welcome back, ${userName}!`);

        const redirectUrl = `../../sidebar.html?username=${userName}`;
        setTimeout(() => {
            window.open(redirectUrl, "_self"); // Navigate to the new page
        }, 300); // Allow time for the toast to display
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        showToast("Error: " + errorMessage); // Display error message in a cool way
      });
  });
});
