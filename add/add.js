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

function addProduct(array, price, img) {
    let title = prompt("Enter the product title:");
    let description = prompt("Enter the product description:");

    array.push(createProduct(title, description, price, img));
    const productsJSON = JSON.stringify(array);
    localStorage.setItem('products', productsJSON);

    addProductCard(img, title, description, price);
}


function filtros() {
    let validPrice = false;
    let validImg = false;

    while (!validPrice || !validImg) {
        let price = parseFloat(prompt("Enter a positive numeric price:"));
        if (!isNaN(price) && price >= 0) {
            validPrice = true;
        } else {
            alert("Please enter a valid positive numeric price.");
        }

        let img = prompt("Enter a valid image file name (e.g., 'shoe-name.webp'):");
        let imgRegExp = /\.webp$/i;
        if (img.match(imgRegExp)) {
            validImg = true;
        } else {
            alert("Please enter a valid image file name ('shoe name' .webp).");
        }

        if (validPrice && validImg) {
            addProduct(products, price, img);
            break;
        }
    }
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

const productCards = document.querySelectorAll(".product-card");

function updateProductCards() {
    const productCardContainer = document.querySelector(".product-card-container");
    productCardContainer.innerHTML = ""; // Clear existing cards

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        addProductCard(product.img, product.title, product.description, product.price);
    }
}

addProductButton.addEventListener("click", function () {
    filtros();
});