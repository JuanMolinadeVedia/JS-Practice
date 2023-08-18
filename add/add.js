

// Define constants and selectors
const addProductForm = document.getElementById("productForm");
const goBackLink = document.querySelector(".button-container a");

// Event listener for form submission
addProductForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addProductFromForm();
});

// Event listener for "Go Back" link
goBackLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Navigate back to index.html
    window.location.href = "./../index.html"; // Update the path as needed
});


// Function to add a product based on form input
function addProductFromForm() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);
    const img = document.getElementById("img").value;

    if (isNaN(price) || price < 0) {
        alert("Please enter a valid positive numeric price.");
        return;
    }

    if (!img.match(/\.webp$/i)) {
        alert("Please enter a valid image file name ('shoe-name.webp').");
        return;
    }

    const product = createProduct(title, description, price, img);
    uploadProducts(product, products);
    updateProductCards();
    saveProductsToLocalStorage();
}

// Function to save products to local storage
function saveProductsToLocalStorage() {
    const productsJSON = JSON.stringify(products);
    localStorage.setItem('products', productsJSON);
}

// Function to create a product object
function createProduct(title, description, price, img) {
    let product = {
        title,
        description,
        price,
        img,
    };
    return product;
}

// Function to upload products to the array
function uploadProducts(product, array) {
    array.push(product);
    return array;
}

// Function to update product cards on the page
function updateProductCards() {
    const productCardContainer = document.querySelector(".product-card-container");
    productCardContainer.innerHTML = ""; // Clear existing cards

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        addProductCard(product.img, product.title, product.description, product.price);
    }
}

// Function to add a product card to the container
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

// Initialize products from local storage on page load
window.addEventListener("load", function () {
    products = JSON.parse(localStorage.getItem('products')) || [];
    updateProductCards();
});

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