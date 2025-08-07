let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((entry, index) => {
    total += entry.price;
    const li = document.createElement("li");
    li.textContent = `${entry.item} - R$ ${entry.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let message = "Olá, gostaria de fazer um pedido:\n\n";
  cart.forEach((entry, index) => {
    message += `• ${entry.item} - R$ ${entry.price.toFixed(2)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `\nTotal: R$ ${total.toFixed(2)}`;

  const encodedMessage = encodeURIComponent(message);
  const phone = "5599999999999"; // Substitua pelo número do WhatsApp com DDD e país
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(url, "_blank");
}