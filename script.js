const addProductButton = document.getElementById("addProductButton");
let products = [];
window.addEventListener("load", function () {
    products = JSON.parse(localStorage.getItem('products')) || [];
    updateProductCards();
});

function createProduct(title, description, price, img) {
    let product = {
        title,
        description,
        price,
        img,
    };
    return product;
}

function uploadProducts(product, array) {
    array.push(product);
    return array;
}

function addProduct(array) {
    let title = prompt("Enter the product title:");
    let description = prompt("Enter the product description:");
    let price = parseFloat(prompt("Enter the product price:"));
    let img = prompt("Enter the product image route (img/):");

    array.push(createProduct(title, description, price, img));
    const productsJSON = JSON.stringify(array);
    localStorage.setItem('products', productsJSON);

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img class="imgs" src="./imgs/${img}" alt="">
        <h3>${title}</h3>
        <p class="description">${description}</p>
        <p class="price">Precio: $${price.toFixed(2)}</p>
    `;

    const productCardContainer = document.querySelector(".product-card-container");
    console.log(productCardContainer);
    productCardContainer.appendChild(productCard);
}


function updateProductCard(product, cardElement) {
    const titleElement = cardElement.querySelector("h3");
    const descriptionElement = cardElement.querySelector(".description");
    const priceElement = cardElement.querySelector(".price");
    const imgElement = cardElement.querySelector(".imgs");

    titleElement.textContent = product.title;
    descriptionElement.textContent = product.description;
    priceElement.textContent = `Precio: $${product.price.toFixed(2)}`;
    imgElement.src = `./imgs/${product.img}`;
}

const productCards = document.querySelectorAll(".product-card");

function updateProductCards() {
    for (let i = 0; i < products.length; i++) {
        updateProductCard(products[i], productCards[i]);
    }
}

addProductButton.addEventListener("click", function () {
    addProduct(products);
    updateProductCards();
});
