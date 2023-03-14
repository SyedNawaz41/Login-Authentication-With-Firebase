import { app } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

let email  = document.querySelector("#email");
let password = document.querySelector("#password");
let signupBtn = document.querySelector("#btn");
let btnResendEmail = document.querySelector("#resendEmail");
let signoutBtn = document.querySelector("#logout");
let backToLogin = document.querySelector("#BTL");

if(signupBtn){
signupBtn.addEventListener("click", signupUser);
}
if(btnResendEmail){
btnResendEmail.addEventListener("click", verifyEmail);
}
if(signoutBtn){
signoutBtn.addEventListener("click", signout);
}
if(backToLogin){
backToLogin.addEventListener("click", signout);
}


const auth = getAuth();

  function signupUser() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            // console.log(`User registered successfully.`, user);
			verifyEmail();
            swal(`User Registered Successfully!!`,`${email.value}`, "success");
            setTimeout(() => {
              location.pathname = "/email_verification.html";
            }, 800);
        
        })
        .catch((e) => {
            swal(e.message);
        })
}

async function verifyEmail(){
  // console.log(auth.currentUser.email);
   await sendEmailVerification(auth.currentUser);
     btnResendEmail.disabled = true;
     setTimeout(function() {
     btnResendEmail.disabled = false;
     }, 5000);
   swal(`Verification Email Sent Successfully!!`,`Kindly Check & Verify Your Email On This Email ${auth.currentUser.email}`, "success");

}

function signout(){
    signOut(auth).then(() => {

        swal(`Logout Successfully!!`,``, "success");
        setTimeout(() => {
          location.pathname = "/index.html";
        }, 800);
		// window.location.replace("index.html");
    }).catch((error) => {
    //   console.error(error);
	swal(error.message);
    });
}
