const addProductButton = document.getElementById("addProductButton");

addProductButton.addEventListener("click", function() {
    addProduct(products);
});
let products = [];

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
}

function showProducts(array) {
    let productsList = "Product List:\n";
    for (let i = 0; i < array.length; i++) {
        productsList += `Title: ${array[i].title}, Description: ${array[i].description}, Price: ${array[i].price}\n`;
    }
    alert(productsList);
}

function mainMenu() {
    let option = prompt(`Menu:
        [0] - Salir
        [1] - Cargar producto
        [2] - Mostrar productos
    `);

    while (option !== "0") {
        switch (option) {
            case "1":
                addProduct(products);
                break;
            case "2":
                showProducts(products);
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
                break;
        }

        option = prompt(`Menu:
            [0] - Salir
            [1] - Cargar producto
            [2] - Mostrar productos
        `);
    }
}

mainMenu();


// Resto de tu código ...

function updateProductCard(product, cardElement) {
    const titleElement = cardElement.querySelector("h3");
    const descriptionElement = cardElement.querySelector(".description");
    const priceElement = cardElement.querySelector(".price");
    const imgElement = cardElement.querySelector(".imgs");

    titleElement.textContent = product.title;
    descriptionElement.textContent = product.description;
    priceElement.textContent = `U$D: ${product.price}`;
    imgElement.src = `./imgs/${product.img}`;
}

// Event listener para el botón "Add Product"
addProductButton.addEventListener("click", function() {
    addProduct(products);
    updateProductCard(products[products.length - 1], productCards[products.length - 1]);
});

// Obtén todas las tarjetas de productos
const productCards = document.querySelectorAll(".product-card");

// Llama a la función para agregar productos al cargar la página
addProduct(products);

// Llama a la función para actualizar la tarjeta de productos con los datos iniciales
for (let i = 0; i < products.length; i++) {
    updateProductCard(products[i], productCards[i]);
}

// Resto de tu código ...
