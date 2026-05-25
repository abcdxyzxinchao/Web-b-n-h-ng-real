import { db }
from "./firebase.js";

import {
  
  collection,
  addDoc
  
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const addBtn =
  document.getElementById("addBtn");

addBtn.onclick = async () => {
  
  const name =
    document.getElementById("name").value;
  
  const price =
    document.getElementById("price").value;
  
  const image =
    document.getElementById("image").value;
  
  try {
    
    await addDoc(
      collection(db, "products"),
      {
        name,
        price,
        image
      }
    );
    
    alert("Đã thêm sản phẩm");
    
  } catch (err) {
    
    alert(err.message);
    
  }
  
};