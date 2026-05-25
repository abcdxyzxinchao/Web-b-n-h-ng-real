import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBoX1FuReGf2onOHS8GlYq8jc5b5398hQU",

authDomain: "banhang-b31dd.firebaseapp.com",

projectId: "banhang-b31dd",

storageBucket: "banhang-b31dd.appspot.com",

messagingSenderId: "634655097273",

appId: "1:634655097273:web:899337e325e046eb91f668"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const provider =
new GoogleAuthProvider();