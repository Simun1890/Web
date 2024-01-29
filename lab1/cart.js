// Inicijalizacija košarice
var cart = [];
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Funkcija koja dodaje proizvod u košaricu
function addToCart(item) {
  // Provjerava da li je proizvod već u košarici
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].item === item) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }
  // Ako proizvod nije pronađen u košarici, dodaj ga
  if (!found) {
    cart.push({ item: item, quantity: 1 });
  }

  // Spremi košaricu u localStorage
  saveCart();

  // Ažuriraj prikaz košarice
  updateCart();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Funkcija koja ažurira prikaz košarice
function updateCart() {
  var cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement("li");
    li.innerHTML =
      cart[i].item + " x " + cart[i].quantity +
      ' <button onclick="removeFromCart(' + i + ')">-</button>';
    cartItems.appendChild(li);
  }
}

// Funkcija koja uklanja proizvod iz košarice
function removeFromCart(index) {
  cart[index].quantity--;
  if (cart[index].quantity === 0) {
    cart.splice(index, 1);
  }

  // Spremi košaricu u localStorage
  saveCart();

  updateCart();
}

// Funkcija koja briše sve stavke iz košarice
function clearCart() {
  cart = [];

  // Spremi košaricu u localStorage
  saveCart();

  updateCart();
}

// Funkcija koja sprema košaricu u localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Funkcija koja učitava košaricu iz localStorage-a
function loadCart() {
  var cartString = localStorage.getItem("cart");
  if (cartString) {
    cart = JSON.parse(cartString);
  }
}

// Učitaj košaricu iz localStorage-a
loadCart();

var kosaricaButton = document.getElementById('kosarica-button');
kosaricaButton.addEventListener('click', function() {
  window.location.href = 'kosarica.html';
});