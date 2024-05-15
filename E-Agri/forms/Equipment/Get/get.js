



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

firebase.initializeApp(firebaseConfig);
var getEquipmentDB = firebase.database().ref("GetEquipmentRequests");

document.getElementById("getform").addEventListener("submit",submitform);

  let toolName = getQueryParameter('tool');

  if(toolName == "Other-tools") toolName = "";

    // Set the value of the equipment name field to the value of the 'tool' parameter
    document.getElementById('tool').value = toolName;

function submitform(e) {
  e.preventDefault();


  var tool = toolName;
  const fromDate = getElementValue('from')
   const toDate = getElementValue("to");
   if(toolName == "")  tool = getElementValue('tool');
  try {
    saveDetails(tool,fromDate,toDate);
    showToast("Details saved successfully!");
    const redirectUrl = `../../../sidebar.html`;
 setTimeout(() => {
   window.open(redirectUrl, "_self");
 }, 300); // Delay allows the toast to display first
  } catch (error) {
    const errorMessage = error.message;
   console.log(errorMessage);
   showToast("Error: " + errorMessage); // Show error message in a cool way
  }

 
}

const saveDetails = (tool,fromDate,toDate) => {
  var newGetEquipmentForm = getEquipmentDB.push();

  newGetEquipmentForm.set({
    tool:tool,
    fromDate:fromDate,
    toDate:toDate

  });
};

const getElementValue = (id) =>{
  return document.getElementById(id).value;
}

function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message; // Set the message
      toast.style.display = "block"; // Show the toast
    
      // Hide the toast after the animation ends
      setTimeout(() => {
          toast.style.display = "none";
      }, 4000); // The duration matches the CSS animation
    }


    function getQueryParameter(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param); // Returns the parameter value
  }