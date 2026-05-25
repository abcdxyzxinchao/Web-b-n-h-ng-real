import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth,
GoogleAuthProvider

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

getFirestore

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDExlGshIrB0YI-bSrAPNBO3zwHpbXb8NY",

authDomain: "shopreal-62678.firebaseapp.com",

projectId: "shopreal-62678",

storageBucket: "shopreal-62678.appspot.com",

messagingSenderId: "768646531769",

appId: "1:768646531769:web:21f820938ffa2136c2e968"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const db =
getFirestore(app);

export const provider =
new GoogleAuthProvider();
