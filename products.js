import { db }
from "./firebase.js";

import {
  
  collection,
  getDocs,
  addDoc
  
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productsDiv =
  document.getElementById("products");

/* LOAD PRODUCTS */

async function loadProducts() {
  
  productsDiv.innerHTML = "";
  
  const querySnapshot =
    await getDocs(
      collection(db, "products")
    );
  
  querySnapshot.forEach((doc) => {
    
    const data = doc.data();
    
    productsDiv.innerHTML += `

<div class="card">

<img src="${data.image}">

<div class="card-content">

<h3>${data.name}</h3>

<p>${data.price}đ</p>

<button
onclick="addToCart(
'${data.name}',
'${data.price}',
'${data.image}'
)">
Thêm giỏ hàng
</button>

<button
onclick="addFavorite(
'${data.name}',
'${data.price}',
'${data.image}'
)">
❤️
</button>

</div>

</div>

`;
    
  });
  
}

/* LOAD */

loadProducts();

/* ADD TO CART */

window.addToCart =
  async (name, price, image) => {
    
    try {
      
      await addDoc(
        collection(db, "cart"),
        {
          name,
          price,
          image
        }
      );
      
      alert("Đã thêm vào giỏ");
      
    } catch (err) {
      
      alert(err.message);
      
    }
    
  };

/* FAVORITES */

window.addFavorite =
  async (name, price, image) => {
    
    try {
      
      await addDoc(
        collection(db, "favorites"),
        {
          name,
          price,
          image
        }
      );
      
      alert("Đã thêm yêu thích");
      
    } catch (err) {
      
      alert(err.message);
      
    }
    
  };