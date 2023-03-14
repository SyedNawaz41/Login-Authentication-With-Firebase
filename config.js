// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrd7OsGz308ioq0ReGUMHXCPNDrEgLjsI",
  authDomain: "sn-test-app.firebaseapp.com",
  projectId: "sn-test-app",
  storageBucket: "sn-test-app.appspot.com",
  messagingSenderId: "1086719818398",
  appId: "1:1086719818398:web:cd268ad343788afab9598f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
    zz
      if(location.pathname === "/index.html"){
        setTimeout(() => {
          location.pathname = "/home.html";
        }, 800);
      }
    } 
    
    else {

      console.log(`User Not Found`);
      if(location.pathname === "/home.html"){

          location.pathname = "/index.html";
      }
      else if(location.pathname === "/todo.html"){
        setTimeout(() => {
          location.pathname = "/index.html";
        }, 800);
      }
        }
        
  });


// // Initialize Firestore
// export const app = initializeApp(firebaseConfig);
