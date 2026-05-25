import {
  db,
  auth
}
from "./firebase.js";

import {
  
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
  
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const cartDiv =
  document.getElementById("cartProducts");

const totalText =
  document.getElementById("total");

let total = 0;

async function loadCart() {
  
  cartDiv.innerHTML = "";
  
  total = 0;
  
  const snapshot =
    await getDocs(
      collection(db, "cart")
    );
  
  snapshot.forEach((item) => {
    
    const data = item.data();
    
    total += Number(data.price);
    
    cartDiv.innerHTML += `

<div class="card">

<img src="${data.image}">

<div class="card-content">

<h3>${data.name}</h3>

<p>${data.price}đ</p>

<button onclick="removeCart('${item.id}')">
Xóa
</button>

</div>

</div>

`;
    
  });
  
  totalText.innerHTML =
    "Tổng: " + total + "đ";
  
}

window.removeCart =
  async (id) => {
    
    await deleteDoc(
      doc(db, "cart", id)
    );
    
    loadCart();
    
  };

loadCart();