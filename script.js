const addProductButton = document.getElementById("addProductButton");

function redirectToAnotherPage() {
    window.location.href = "./add/add.html" ;
}

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

    addProductCard(img, title, description, price);
}

function addProductCard(img, title, description, price) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img class="imgs" src="./imgs/${img}" alt="">
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
        <p class="price">Precio: $${price.toFixed(2)}</p>
    `;

    const productCardContainer = document.querySelector(".product-card-container");
    // console.log(productCardContainer);
    productCardContainer.appendChild(productCard);
}

// function updateProductCard(product, cardElement) {
//     const titleElement = cardElement.querySelector(".title");
//     const descriptionElement = cardElement.querySelector(".description");
//     const priceElement = cardElement.querySelector(".price");
//     const imgElement = cardElement.querySelector(".imgs");

//     titleElement.textContent = product.title;
//     descriptionElement.textContent = product.description;
//     priceElement.textContent = `Precio: $${product.price.toFixed(2)}`;
//     imgElement.src = `./imgs/${product.img}`;
// }

const productCards = document.querySelectorAll(".product-card");
// console.log(productCards);

function updateProductCards() {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        addProductCard(product.img, product.title, product.description, product.price);
    }
}

//  addProductButton.addEventListener("click", function () {
//      addProduct(products);  
//  });
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        
    } else {
        body.classList.remove("dark-mode");
    }
    console.log(darkModeToggle.checked);

});