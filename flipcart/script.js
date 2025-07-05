
const shirts = document.querySelectorAll(".shirt");

shirts.forEach(shirt => {

  shirt.addEventListener("mouseenter", () => {
    shirt.style.transform = "scale(1.05)";
    shirt.style.transition = "transform 0.3s ease";
    shirt.style.boxShadow = "0 4px 10px red";
  });


  shirt.addEventListener("mouseleave", () => {
    shirt.style.transform = "scale(1)";
    shirt.style.boxShadow = "none";
  });
});




const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#2874f0';
    link.style.textDecoration = 'underline';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#2c2c2c';
    link.style.textDecoration = 'none';
  });
});



  
  function CART(name, image, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, image, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`You are buying ${name} for ₹${price}!`);
    window.location.href = "Cart.html";
  }

  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalPriceDiv = document.getElementById("total-price");

  function updateCart() {
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
      totalPriceDiv.textContent = '';
      return;
    }

    cart.forEach((item, index) => {
      total += parseInt(item.price);

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-details">
          <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
          <div>
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
          </div>
        </div>
        <div style="margin-top: 10px;">
          <button onclick="removeItem(${index})">Remove</button>
          <button onclick="buyNow('${item.name}', ${item.price})">Buy Now</button>
        </div>
      `;
      container.appendChild(div);
    });

    totalPriceDiv.textContent = `Total Price: ₹${total}`;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }

  function buyNow(name, price) {
    alert(`Thank you for buying ${name} for ₹${price}!`);
    
  }


  updateCart();
