const productForm = document.getElementById("productForm");
const formContainer = document.querySelector(".form-container");

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

function addProduct(array) {
    const title = productForm.title.value;
    const description = productForm.description.value;
    const price = parseFloat(productForm.price.value);
    const img = productForm.img.value;

    array.push(createProduct(title, description, price, img));
    const productsJSON = JSON.stringify(array);
    localStorage.setItem('products', productsJSON);

    addProductCard(img, title, description, price);

    productForm.reset(); // Reset the form after submission

    // Actualizar las tarjetas de productos
    updateProductCards();
}

function addProductCard(img, title, description, price) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img class="imgs" src="./../imgs/${img}" alt="">
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
        <p class="price">Price: $${price.toFixed(2)}</p>
    `;

    const productCardContainer = document.querySelector(".product-card-container");
    productCardContainer.appendChild(productCard);
}

function updateProductCards() {
    const productCardContainer = document.querySelector(".product-card-container");
    productCardContainer.innerHTML = ""; // Limpiar las tarjetas existentes

    if (products.length === 0) {
        const noProductMessage = document.createElement("p");
        noProductMessage.textContent = "No products added yet.";
        productCardContainer.appendChild(noProductMessage);
    } else {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            addProductCard(product.img, product.title, product.description, product.price);
        }
    }
}

productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addProduct(products);
});