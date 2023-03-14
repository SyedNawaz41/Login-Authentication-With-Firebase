  import { app } from "./config.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let email = document.querySelector("#email2");
let password = document.querySelector("#password2");
let loginBtn = document.querySelector("#btn2");
let resetpassemail = document.querySelector("#forgetPassEmail");
let resetBtn = document.querySelector("#reset_btn");

if(loginBtn){
loginBtn.addEventListener("click", login);
}
if(resetBtn){
    resetBtn.addEventListener("click", resetPassword);
}

const auth = getAuth();

function login() {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      // Signed in 
     
      swal(`You Login Successfully!!`,`${email.value}`, "success");
      setTimeout(() => {
        location.pathname = "/home.html";
      }, 800);
      
    })
    .catch((error) => {
    //   const errorCode = error.code;
    swal(error.message); 
    });
}


async function resetPassword(){
    try{
    await sendPasswordResetEmail(auth, resetpassemail.value);
    swal(`Email Sent`, `Reset Password link sent to your email, kindly check your email`, "success");
        // Password reset email sent!
    }
    catch(error){
      swal(error.message); 
    }
 }
 
//  onAuthStateChanged(auth, (user) => {
//   if (user) {
//     if(user.emailVerified === false && location.pathname !== "/email_verification.html"){
//       location.pathname = "/email_verification.html"
//       console.log(`user found ${user}`);
//     }
//     // ...
//   } 
  
//   else {
//     // location.pathname = "/index.html"
//     console.log(`User Not Found`);
//       }
      
// });