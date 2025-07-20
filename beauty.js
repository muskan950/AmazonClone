
const menuBtn = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebarMenu");


let signin=document.querySelector(".sign-in");




  
function displayItems (){
  let itemsContainer = document.querySelector(".items-container");
  let innerHTML='';
item.forEach(item=>{
 innerHTML+= `<div class="box-container">
        <img class="box-img" src="${item.image}" alt="cetaphil">
        <div class="rating">
          ${item.rating.stars}<i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>|${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs${item.current_price}</span>
          <span class="og-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="cart-btn" onclick="AddToBag(${item.id})">Add to Cart</button>
      </div>`;
});

itemsContainer.innerHTML =innerHTML;
}


menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to document
  sidebar.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});
signin.addEventListener("click", (e) => {
    e.stopPropagation(); // So sidebar doesn't close when clicking
    window.location.href = "signin.html";
});

let bagItems = [];

const storedCart = localStorage.getItem("cart");
if (storedCart) {
  bagItems = JSON.parse(storedCart).filter(item => item != null);
  localStorage.setItem("cart", JSON.stringify(bagItems)); // Clean up localStorage on load
}
console.log('bagItems on load:', bagItems);

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.textContent = bagItems.length > 0 ? bagItems.length : "0";  // Show 0 if empty
  }
}



function AddToBag(itemID) {
  if (!itemID) return; // ignore invalid items
  bagItems.push(itemID);
  localStorage.setItem("cart", JSON.stringify(bagItems));
  updateCartCount();
}
displayItems();
updateCartCount();
displayItems();
// let bagItems = [];

// const storedCart = localStorage.getItem("cart");
// if (storedCart) {
//   bagItems = JSON.parse(storedCart).filter(item => item != null);
//   localStorage.setItem("cart", JSON.stringify(bagItems)); // Clean up localStorage on load
// }
// console.log('bagItems on load:', bagItems);

// // Then define displayItems
// function displayItems () {
//   let itemsContainer = document.querySelector(".items-container");
//   let innerHTML = '';
//   item.forEach(item => {
//     innerHTML += `<div class="box-container">
//       <img class="box-img" src="${item.image}" alt="cetaphil">
//       <div class="rating">
//         ${item.rating.stars}<i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>|${item.rating.count}
//       </div>
//       <div class="company-name">${item.company}</div>
//       <div class="item-name">${item.item_name}</div>
//       <div class="price">
//         <span class="current-price">Rs${item.current_price}</span>
//         <span class="og-price">Rs ${item.original_price}</span>
//         <span class="discount">(${item.discount_percentage}% OFF)</span>
//       </div>
//       <button class="cart-btn" onclick="AddToBag(${item.id})">Add to Cart</button>
//     </div>`;
//   });
//   itemsContainer.innerHTML = innerHTML;
// }

// // Define AddToBag first
// function AddToBag(itemID) {
//   if (!itemID) return; // ignore invalid items
//   bagItems.push(itemID);
//   localStorage.setItem("cart", JSON.stringify(bagItems));
//   updateCartCount();
// }

// // Define updateCartCount
// function updateCartCount() {
//   const countEl = document.getElementById("cart-count");
//   if (countEl) {
//     countEl.textContent = bagItems.length > 0 ? bagItems.length : "0";
//   }
// }

// // Call these AFTER defining them

// updateCartCount();
// let bagItems = []; // Start with empty cart every time

// function AddToBag(itemID) {
//   bagItems.push(itemID);
//   updateCartCount();
// }

// function updateCartCount() {
//   const countEl = document.getElementById("cart-count");
//   if (countEl) {
//     countEl.textContent = bagItems.length;
//   }
// }

// function displayItems() {
//   const itemsContainer = document.querySelector(".items-container");
//   let innerHTML = "";

//   item.forEach(item => {
//     innerHTML += `
//       <div class="box-container">
//         <img class="box-img" src="${item.image}" alt="${item.item_name}">
//         <div class="rating">
//           ${item.rating.stars} <i class="fa-solid fa-star"></i> | ${item.rating.count}
//         </div>
//         <div class="company-name">${item.company}</div>
//         <div class="item-name">${item.item_name}</div>
//         <div class="price">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="og-price">Rs ${item.original_price}</span>
//           <span class="discount">(${item.discount_percentage}% OFF)</span>
//         </div>
//         <button class="cart-btn" onclick="AddToBag(${item.id})">Add to Cart</button>
//       </div>
//     `;
//   });

//   itemsContainer.innerHTML = innerHTML;
// }

// Always run on load
// window.addEventListener("load", () => {
//   displayItems();       // Always show items
//   updateCartCount();    // Reset cart to 0
// });
// ✅ Start with an empty cart every time (no localStorage)
// let bagItems = [];

// // ✅ Add item to bag (temporary memory only)
// function AddToBag(itemID) {
//   bagItems.push(itemID);
//   localStorage.setItem("cart", JSON.stringify(bagItems)); // ✅ Save to localStorage
//   updateCartCount();
// }

// // ✅ Update the cart count
// function updateCartCount() {
//   const countEl = document.getElementById("cart-count");
//   if (countEl) {
//     countEl.textContent = bagItems.length;
//   }
// }

// // ✅ Display all items on page
// function displayItems() {
//   const itemsContainer = document.querySelector(".items-container");
//   let innerHTML = '';

//   item.forEach(item => {
//     innerHTML += `
//       <div class="box-container">
//         <img class="box-img" src="${item.image}" alt="${item.item_name}">
//         <div class="rating">
//           ${item.rating.stars} <i class="fa-solid fa-star"></i> | ${item.rating.count}
//         </div>
//         <div class="company-name">${item.company}</div>
//         <div class="item-name">${item.item_name}</div>
//         <div class="price">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="og-price">Rs ${item.original_price}</span>
//           <span class="discount">(${item.discount_percentage}% OFF)</span>
//         </div>
//         <button class="cart-btn" onclick="AddToBag(${item.id})">Add to Cart</button>
//       </div>
//     `;
//   });

//   itemsContainer.innerHTML = innerHTML;
// }

// // ✅ Show items and reset cart on page load
// window.addEventListener("load", () => {
//   displayItems();       // Show items permanently
//   updateCartCount();    // Reset cart count to 0
// });

// // ✅ Sidebar/menu click handlers (optional)
// const menuBtn = document.getElementById("toggleMenu");
// const sidebar = document.getElementById("sidebarMenu");
// const signin = document.querySelector(".sign-in");

// menuBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   sidebar.classList.toggle("active");
// });

// document.addEventListener("click", (e) => {
//   if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
//     sidebar.classList.remove("active");
//   }
// });

// signin.addEventListener("click", (e) => {
//   e.stopPropagation();
//   window.location.href = "signin.html";
// });
