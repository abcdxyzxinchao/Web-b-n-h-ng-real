import {
  
  auth,
  provider
  
}
from "./firebase.js";

import {
  
  signInWithEmailAndPassword,
  
  createUserWithEmailAndPassword,
  
  signInWithPopup,
  
  sendPasswordResetEmail
  
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* LOGIN */

const loginBtn =
  document.getElementById("loginBtn");

if (loginBtn) {
  
  loginBtn.onclick = async () => {
    
    const email =
      document.getElementById("email").value;
    
    const password =
      document.getElementById("password").value;
    
    try {
      
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      alert("Đăng nhập thành công");
      
      window.location.href =
        "index.html";
      
    } catch (err) {
      
      alert(err.message);
      
    }
    
  };
  
}

/* GOOGLE LOGIN */

const googleBtn =
  document.getElementById("googleBtn");

if (googleBtn) {
  
  googleBtn.onclick = async () => {
    
    try {
      
      await signInWithPopup(
        auth,
        provider
      );
      
      alert("Google login thành công");
      
      window.location.href =
        "index.html";
      
    } catch (err) {
      
      alert(err.message);
      
    }
    
  };
  
}

/* RESET PASSWORD */

const resetBtn =
  document.getElementById("resetBtn");

if (resetBtn) {
  
  resetBtn.onclick = async () => {
    
    const email =
      document.getElementById("email").value;
    
    if (!email) {
      alert("Nhập email trước");
      return;
    }
    
    try {
      
      await sendPasswordResetEmail(
        auth,
        email
      );
      
      alert("Đã gửi mail reset");
      
    } catch (err) {
      
      alert(err.message);
      
    }
    
  };
  
}

/* SHOW PASSWORD */

const togglePassword =
  document.getElementById("togglePassword");

if (togglePassword) {
  
  togglePassword.onclick = () => {
    
    const password =
      document.getElementById("password");
    
    password.type =
      password.type === "password" ?
      "text" :
      "password";
    
  };
  
}