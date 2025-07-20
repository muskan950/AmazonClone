const menuBtn = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebarMenu");
const signin=document.querySelector(".sign-in");
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
document.addEventListener("click",()=>{
      window.location.href = "signin.html";
})


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
updateCartCount();

